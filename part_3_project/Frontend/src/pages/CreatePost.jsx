import axios from "axios";
import { useNavigate } from "react-router-dom";

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  axios
    .post("http://localhost:3000/create-post", formData)
    .then((res) => {
      // Clear the form
      e.target.reset();

      navigation.navigate("/feed");
    })
    .catch((err) => {
      console.log(err);
      alert("Error creating post");
    });
};

const CreatePost = () => {
  return (
    <section className="create-post-section">
      <div className="create-post-container">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" />

          <input
            type="text"
            name="caption"
            placeholder="Enter caption"
            required
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
