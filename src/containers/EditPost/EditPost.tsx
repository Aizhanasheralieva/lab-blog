import PostForm from '../../components/PostForm/PostForm.tsx';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI, IPostForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const EditPost = () => {
  const [post, setPost] = useState<IPost>();
  const params = useParams<{idPost: string}>();

  const fetchOnePost = useCallback(async () => {
    const response: {data} = await axiosAPI<IPostAPI>(`posts/${params.idPost}.json`);

    if (response.data) {
      setPost(response.data);
    }
  }, [params.idPost]);

  console.log('Params ID' + params.idPost);

  const submitForm = async (postData: IPostForm) => {
    try {
      await axiosAPI.put(`posts/${params.idPost}.json`, postData);
      console.log(postData);
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    if (params.idPost) {
      void fetchOnePost();
    }

    // console.log(params);
  }, [params.idPost, fetchOnePost]);
  return post && (
    <div>
      <PostForm postToEdit={post} submitForm={submitForm} />
    </div>
  );
};

export default EditPost;