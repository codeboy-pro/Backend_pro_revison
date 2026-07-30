import { useState,useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
   axios.get("http://localhost:3000/posts")
   .then((res)=>{
    
    setposts(res.data.posts);
   }).catch((err)=>{
    console.log(err);
   })
   

    
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />

            <div className="post-content">
              <p>{post.caption}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-feed">
          <h2>No Posts Yet 📸</h2>
          <p>Create your first post to see it here.</p>
        </div>
      )}
    </section>
  );
};

export default Feed;
