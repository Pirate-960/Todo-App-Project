import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h5 className="mb-2" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>
              <Link className="navbar-brand text-primary fw-bold" href="/">About Todo App - Task Master</Link>
            </h5>
            <p style={{ fontSize: '0.8rem', lineHeight: '1', maxWidth: '1200px' }}>
              <Link className="link" href="/">Todo App - Task Master</Link> is your ultimate productivity tool. Manage your tasks, set reminders, collaborate with others, and track your progress—all in one place. Stay organized and achieve your goals effortlessly.
            </p>
          </div>
          <div className="col-md-6 col-12 text-end">
            <p>Total Views <code className="text-success">123</code></p>
          </div>
        </div>
        <div className="row mt-0.5">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 <Link className="link" href="/">Todo App - Task Master</Link>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
