import React from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const PostForm = () => {

  const testAdd = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title: "Test",
        content: "Hello",
        createdAt: new Date()
      });
      alert("Пост кошулду ✅");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={testAdd}>Test Post кошуу</button>
    </div>
  );
};

export default PostForm;