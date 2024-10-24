import PostForm from '../../components/PostForm/PostForm.tsx';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';

const EditPost = () => {
  const [post, setPost] = useState<IPost>();
  const params = useParams<{idPost: string}>();

  const fetchOnePost = useCallback(async (id: string | undefined) => {
    const response: {data: IPostAPI} = await axiosAPI<IPostAPI>(`posts/${id}.json`);

    if (response.data) {
      // console.log(response.data);
      setPost(response.data);
    }
  }, []);

  console.log(post);

  useEffect(() => {
    if (params.idPost) {
      void fetchOnePost(params.idPost);
    }

    // console.log(params);
  }, [params.idPost, fetchOnePost]);
  return post && (
    <div>
      <PostForm postToEdit={post} />
    </div>
  );
};

export default EditPost;