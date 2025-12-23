import React from 'react';
import './Blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    date: "Stardate 2025.12",
    title: "Why We Fear the Silence",
    excerpt: "In space, silence isn't empty. It's waiting. A look into the psychology of isolation..."
  },
  {
    id: 2,
    date: "Stardate 2025.10",
    title: "The Physics of Nightmares",
    excerpt: "Exploring the scientific possibility of parallel dimensions where fear is a physical force..."
  }
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="section-header">
        <span className="subtitle">Incoming Transmissions</span>
        <h2>Captain's Logs</h2>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="card-header">
              <span className="blog-date">{post.date}</span>
              <div className="signal-dot"></div> {/* Blinking red dot */}
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className="read-more">Decrypt Signal →</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;