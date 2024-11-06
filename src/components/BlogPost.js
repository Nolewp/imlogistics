// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import * as Blog1 from './blogs/Blog1.js';
import * as Blog2 from './blogs/Blog2.js';
import * as Blog3 from './blogs/Blog3.js';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  // Here you might fetch blog data based on the ID or use hardcoded data for testing
  const blogData = {
    1: Blog1.default,
    2: Blog2.default,
    3: Blog3.default,
    // Add more posts as needed
  };

  const BlogComponent = blogData[id];

  if (!BlogComponent) {
    return <p>Blog post not found.</p>;
  }
  console.log(BlogComponent); 
  return (
    <div>
      <BlogComponent /> {/* Render the component */}
    </div>
  );
};

export default BlogPost;
