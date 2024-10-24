import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import axiosAPI from '../../axiosAPI.ts';
import dayjs from 'dayjs';

const PostDetailedInformation = () => {
  const { idPost } = useParams();
  const [post, setPost] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPost= async () => {
      try {
        const response = await axiosAPI.get(`posts/${idPost}.json`);
        setPost(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    void fetchPost();
  }, [idPost]);

  if (!post) {
    return <p>Post is being loaded.</p>
  }

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
          <Button size="small" component={NavLink} to={`/posts/${post.id}/edit`}>Edit</Button>
          {/*<Button size="small" component={NavLink} to={`/posts/${post.id}`}>Delete</Button>*/}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostDetailedInformation;