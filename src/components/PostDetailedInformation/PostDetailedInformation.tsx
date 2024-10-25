import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import axiosAPI from "../../axiosAPI.ts";
import dayjs from "dayjs";
import Loader from '../UI/Loader/Loader.tsx';
import PostForm from '../PostForm/PostForm.tsx';

const PostDetailedInformation = () => {
  const [post, setPost] = useState(null);
  const params = useParams<{ idPost: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axiosAPI.get(`posts/${params.idPost}.json`);
        setPost(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    void fetchPost();
  }, [params.idPost]);

  // if (!post) {
  //   return <p>Post is being loaded.</p>;
  // }

  const deletePost = async () => {
    try {
      if (params.idPost) {
        await axiosAPI.delete(`posts/${params.idPost}.json`);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {post ? (
            <>
              <Grid>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Created on: {dayjs(post.datetime).format("DD.MM.YYYY HH:mm")}
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: 20, mb: 2 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body1">{post.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={NavLink}
                      to={`/posts/${params.idPost}/edit`}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      component={NavLink}
                      to={`/posts/${post.id}`}
                      onClick={deletePost}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default PostDetailedInformation;
