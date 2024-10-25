import PostForm from '../../components/PostForm/PostForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI, IPostForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import Loader from '../../components/UI/Loader/Loader.tsx';

const EditPost = () => {
  const [post, setPost] = useState<IPost>();
  const params = useParams<{ idPost: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data } = await axiosAPI<IPostAPI>(
        `posts/${params.idPost}.json`,
      );

      if (response.data) {
        setPost(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [params.idPost]);

  const submitForm = async (postData: IPostForm) => {
    try {
      await axiosAPI.put(`posts/${params.idPost}.json`, postData);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (params.idPost) {
      void fetchOnePost();
    }
  }, [params.idPost, fetchOnePost]);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          {post ? (
            <>
              <PostForm postToEdit={post} submitForm={submitForm}/>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default EditPost;
