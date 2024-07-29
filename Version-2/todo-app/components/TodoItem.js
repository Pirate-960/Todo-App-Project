// components/TodoItem.js
import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(todo.content);

  const handleUpdate = async () => {
    const todoRef = doc(db, 'todos', todo.id);
    await updateDoc(todoRef, { content: newContent });
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const todoRef = doc(db, 'todos', todo.id);
    await deleteDoc(todoRef);
  };

  return (
    <li className="list-group-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleUpdate} className="btn btn-success">Save</button>
        </>
      ) : (
        <>
          <span>{todo.content}</span>
          <button onClick={() => setIsEditing(true)} className="btn btn-warning">Edit</button>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
