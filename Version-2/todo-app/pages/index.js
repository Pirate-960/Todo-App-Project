// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <main className='container-fluid'>
      <div className='row bg-light py-5 gx-5'>
        <div className='col-12 text-center'>
          <h1 className='mb-4'>Welcome to TaskMaster: Your Personal Productivity Guru!</h1>
          <p className='lead'>Organize Your Day, Your Way!</p>
        </div>
        <div className='col-md-8 offset-md-2'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>🌟</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Effortless Task Management</h5>
                  <p className='card-text'>Add tasks with a simple tap. Prioritize with stars and categorize with vibrant tags.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>🕒</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Smart Scheduling</h5>
                  <p className='card-text'>Schedule tasks effortlessly and set reminders that sync with your calendar. Never miss a deadline again!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>🔔</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Intuitive Reminders</h5>
                  <p className='card-text'>Get timely notifications tailored to your schedule. Morning, noon, or night—TaskMaster keeps you on track.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>📈</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Progress at a Glance</h5>
                  <p className='card-text'>Visualize your productivity with our dynamic progress charts. Celebrate your accomplishments!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>👥</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Collaborate Seamlessly</h5>
                  <p className='card-text'>Share your tasks with friends, family, or colleagues. Work together, achieve together!</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>💬</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Personalized Insights</h5>
                  <p className='card-text'>Receive daily productivity tips and motivational quotes based on your task history and preferences.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>🌙</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Zen Mode</h5>
                  <p className='card-text'>Need a break? Switch to Zen Mode to pause notifications and enjoy some peace and quiet.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='card text-center shadow-sm'>
                <div className='card-body'>
                  <h2 className='card-title' style={{ fontSize: '2rem' }}>🎨</h2>
                  <h5 className='card-subtitle mb-2 text-muted'>Customizable Themes</h5>
                  <p className='card-text'>Make TaskMaster yours with a variety of themes and color palettes. Match your mood and style!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <p className='mt-4'>Ready to conquer your to-do list? Dive into TaskMaster and transform the way you get things done!</p>
            <button className='btn btn-primary btn-lg mt-3' style={{ borderRadius: '50px', padding: '10px 30px', fontSize: '1.25rem' }}>Try Now</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
