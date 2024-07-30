// pages/about.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About TaskMaster</h1>
        <p>Welcome to TaskMaster, your personal productivity guru!</p>
      </header>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At <Link className="link" href="\">TaskMaster</Link>, we believe that productivity should be seamless and enjoyable.
          Our mission is to empower you to organize your day, your way, and achieve your goals
          with ease and efficiency. We strive to turn your daily grind into a gratifying journey
          of accomplishment and growth.
        </p>
      </section>

      <section className="about-features">
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Effortless Task Management:</strong> Add tasks with a simple tap, prioritize
            with stars, and categorize with vibrant tags.
          </li>
          <li>
            <strong>Smart Scheduling:</strong> Schedule tasks effortlessly and set reminders that
            sync with your calendar. Never miss a deadline again!
          </li>
          <li>
            <strong>Intuitive Reminders:</strong> Get timely notifications tailored to your schedule.
            Morning, noon, or night—TaskMaster keeps you on track.
          </li>
          <li>
            <strong>Progress at a Glance:</strong> Visualize your productivity with our dynamic progress
            charts and celebrate your accomplishments!
          </li>
          <li>
            <strong>Collaborate Seamlessly:</strong> Share your tasks with friends, family, or colleagues.
            Work together, achieve together!
          </li>
          <li>
            <strong>Personalized Insights:</strong> Receive daily productivity tips and motivational quotes
            based on your task history and preferences.
          </li>
          <li>
            <strong>Zen Mode:</strong> Need a break? Switch to Zen Mode to pause notifications and enjoy
            some peace and quiet.
          </li>
          <li>
            <strong>Customizable Themes:</strong> Make TaskMaster yours with a variety of themes and color
            palettes. Match your mood and style!
          </li>
        </ul>
      </section>

      <section className="about-benefits">
        <h2>Why Choose TaskMaster?</h2>
        <p>
          <Link className="link" href="\">TaskMaster</Link> is designed with you in mind. Whether you're a student, professional, or a busy parent,
          our app adapts to your unique needs. With TaskMaster, you can:
        </p>
        <ul>
          <li>Streamline your daily tasks</li>
          <li>Boost your productivity</li>
          <li>Stay organized and focused</li>
          <li>Collaborate effortlessly with others</li>
          <li>Enjoy a personalized productivity experience</li>
        </ul>
      </section>

      <section className="about-community">
        <h2>Join Our Community</h2>
        <p>
          We're more than just an app; we're a community of productivity enthusiasts. Join us on this journey
          to transform the way you get things done. Connect with us on social media, share your success stories,
          and get inspired by others. Together, we can achieve more!
        </p>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to us at:
          <a href="mailto:support@taskmaster.com">support@taskmaster.com</a>.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          Ready to conquer your to-do list? Dive into <Link className="link" href="\">TaskMaster</Link> and transform the way you get things done!
        </p>
      </footer>
    </div>
  );
};

export default About;
