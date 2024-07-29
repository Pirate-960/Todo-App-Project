// pages/auth/signup.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: data.name,
        email: data.email,
        createdAt: new Date(),
      });
      router.push('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" {...register('password', { required: true, minLength: 8 })} />
          {errors.password && <span>Password must be at least 8 characters</span>}
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
