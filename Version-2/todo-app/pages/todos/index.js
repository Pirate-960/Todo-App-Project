// pages/todos/index.js
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import TodoItem from '../../components/TodoItem';
import AddTodoForm from '../../components/AddTodoForm';
import { useRouter } from 'next/router';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push('/auth/signin');
      return;
    }
    
    const q = query(
      collection(db, 'todos'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []);

  const filteredTodos = todos.filter(todo =>
    todo.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Your Todos</h2>
      <AddTodoForm />
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search todos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
