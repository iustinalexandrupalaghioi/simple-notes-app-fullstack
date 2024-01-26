import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:8000/api/notes");
      setItems(response.data);
    };
    getPosts();
  }, []);

  const deleteItem = async (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:8000/api/notes/delete/${id}`);
  };

  return (
    <div className="my-5 min-vh-100">
      <div className="card-container d-flex gap-3 mx-5">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.description}
            onDelete={() => deleteItem(item.id)}
            onUpdate={() => navigate(`/notes/update/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
