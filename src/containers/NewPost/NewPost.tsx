import React, { useState } from "react";
import PostForm from "../../components/PostForm/PostForm.tsx";
import { IPostForm } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import Loader from "../../components/UI/Loader/Loader.tsx";
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosAPI.post("posts.json", { ...post });
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return <>{loading ? <Loader /> : <PostForm submitForm={submitForm} />}</>;
};

export default NewPost;
