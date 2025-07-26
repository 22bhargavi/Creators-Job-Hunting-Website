import "./App.css";
import ChatWidget from "./Components/ChatWidget";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      <header className="top-bar">
        <div className="logo-title">BreadButter</div>
        <nav className="nav-bar">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/services")}>Services</button>
          <button onClick={() => navigate("/jobs")}>Jobs</button>
          <button onClick={() => navigate("/explore")}>Explore</button>
          <button onClick={() => navigate("/profile")}>Profile</button>
        </nav>
      </header>
      <main className="content">
        <h1>Welcome to BreadButter</h1>
        <p>Your skills. Your spotlight. Your success.</p>
      </main>
      <section className="categories">
        <h2>Explore Talent Categories</h2>
        <div className="category-list">
          <span>🎨 Designers</span>
          <span>💻 Developers</span>
          <span>🎙️ Voice Artists</span>
          <span>📸 Influencers</span>
          <span>✍️ Writers</span>
        </div>
      </section>
      {/* FOOTER SECTION */}
      <footer className="footer">
        <p>&copy; 2025 BreadButter. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy </a>
          <a href="#">Terms of Service </a>
          <a href="#">Contact Us</a>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

export default App;
