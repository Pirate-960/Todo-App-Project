// components/AddTodoForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

const AddTodoForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const user = auth.currentUser;
    if (!user) {
      return;
    }

    await addDoc(collection(db, 'todos'), {
      content: data.content,
      userId: user.uid,
      createdAt: serverTimestamp(),
      completed: false
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="mb-3">
        <label htmlFor="content" className="form-label">New Todo</label>
        <input
          type="text"
          className="form-control"
          id="content"
          {...register('content', { required: true })}
        />
        {errors.content && <span>This field is required</span>}
      </div>
      <button type="submit" className="btn btn-primary">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
