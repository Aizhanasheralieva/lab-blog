import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { IPost } from '../../types';

interface Props {
  post: IPost;
}
const PostItem: React.FC<Props> = ({post}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          Created on:{" "}
          {dayjs(post.datetime).format("DD.MM.YYYY HH:mm")}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 20 }}>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={NavLink}
          to={`/posts/${post.id}`}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;