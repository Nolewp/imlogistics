// src/App.js
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Blog from './components/Blog.js';
import BlogPost from './components/BlogPost.js';
import Thanks from './components/Thanks.js';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/blog" element={<Blog />} /> {/* Blog route */}
          <Route path="/blog/:id" element={<BlogPost />} /> {/* Blog route */}
          <Route path="/thanks" element={<Thanks />}/> {/* Thanks route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
