import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import axiosAPI from '../../axiosAPI.ts';
import dayjs from 'dayjs';
import { IPost, IPostAPI, IPostForm } from '../../types';
import axios from 'axios';

const PostDetailedInformation = () => {
  const [post, setPost] = useState(null);
  const params = useParams<{idPost: string}>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost= async () => {
      try {
        const response = await axiosAPI.get(`posts/${params.idPost}.json`);
        setPost(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    void fetchPost();
  }, [params.idPost]);

  if (!post) {
    return <p>Post is being loaded.</p>;
  }

  const deletePost = async () => {
    try {
      if (params.idPost) {
        await axiosAPI.delete(`posts/${params.idPost}.json`);
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" sx={{ fontSize: 20}}>
            {post.title}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Created on: {dayjs(post.datetime).format('DD.MM.YYYY h:mm A')}
          </Typography>
          <Typography variant="body1">{post.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={NavLink} to={`/posts/${params.idPost}/edit`}>Edit</Button>
          <Button size="small" component={NavLink} to={`/posts/${post.id}`} onClick={deletePost}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostDetailedInformation;