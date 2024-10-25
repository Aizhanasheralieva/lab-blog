import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IPost, IPostAPI } from '../../types';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Loader from '../../components/UI/Loader/Loader.tsx';
import PostItem from '../../components/PostItem/PostItem.tsx';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data } = await axiosAPI<IPostAPI>("posts.json");

      if (response.data) {
        const postsFromAPI = Object.keys(response.data).map((postKey) => {
          return {
            id: postKey,
            ...response.data[postKey],
          };
        });

        console.log(postsFromAPI);

        setPosts(postsFromAPI);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  return (
    <>
      {loading ? <Loader/> :
      <>
        <Grid container spacing={2} sx={{mb: 5}}>
          <Grid item xs={4} md={4}>
          {posts.length === 0 ? (
            <p>Any posts found!</p>
          ) : (
            <>
              {posts.map((post) => (
                <Grid key={post.id}>
                    <PostItem post={post} />
                </Grid>
              ))}
            </>
          )}
          </Grid>
          <Grid item xs={4} md={4}>
            <Outlet/>
          </Grid>
        </Grid>
      </>
      }
    </>
  );
};

export default Home;
