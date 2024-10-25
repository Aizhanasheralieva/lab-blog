import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IPost, IPostAPI } from '../../types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const fetchData = useCallback(async () => {
    const response: {data} = await axiosAPI<IPostAPI>('posts.json');

    if (response.data) {
      const postsFromAPI = Object.keys(response.data).map(postKey => {
        return {
          id: postKey,
          ...response.data[postKey],
        };
      });

      console.log(postsFromAPI);

      setPosts(postsFromAPI);
    }
    console.log(response.data);
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <Grid container spacing={2}>
      {posts.length === 0 ? <p>Any posts found!</p> :
        <>
          {posts.map((post) => (
            <Grid key={post.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Created on: {dayjs(post.datetime).format('DD.MM.YYYY h:mm A')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 20}}>
                    {post.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={NavLink} to={`/posts/${post.id}`}>Read more</Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </>
      }


    </Grid>
  );
};

export default Home;
