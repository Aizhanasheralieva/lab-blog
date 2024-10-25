import React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { IPostForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const NewPost = () => {

  const submitForm = async (post: IPostForm) => {
    console.log(post);
    await axiosAPI.post('posts.json', {...post});
  }

  return (
    <>
      <PostForm submitForm={submitForm} />
    </>
  );
};

export default NewPost;