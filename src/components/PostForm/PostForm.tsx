import { useEffect, useState } from 'react';
import { IPostForm } from "../../types";
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axiosAPI from '../../axiosAPI.ts';
import dayjs from 'dayjs';
import { post } from 'axios';


const initialForm = {
  title: "",
  description: "",
  datetime: "",
}

interface Props {
  postToEdit?: IPostForm;
}
const PostForm: React.FC<Props> = ({postToEdit}) => {
  const [form, setForm] = useState<IPostForm>({...initialForm});

  useEffect(() => {
    if (postToEdit) {
      setForm(prevState => ({
        ...prevState,
        ...postToEdit,
      }));
    }
  }, [postToEdit]);

  const onShiftArea = (e: React.FormEvent<HTMLFormElement>) => {
    const {name, value} = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const postData = {
      ...form,
      datetime: dayjs().toISOString(),
    };

    await axiosAPI.post('posts.json', postData);
    console.log(postData);
    console.log(form);

    setForm({...initialForm});
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography
        variant="h4"
        sx={{ flexGrow: 1, textAlign: "center" }}
      >
        {postToEdit ? 'Edit' : ' Add new'} post
      </Typography>
      <Grid container spacing={2} sx={{ mx: "auto", width: "50%", mt: 4 }}>
        <Grid size={12}>
          <TextField
            sx={{width: "100%"}}
            id="outlined-basic"
            label="Title"
            name="title"
            variant="outlined"
            value={form.title}
            onChange={onShiftArea}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: "100%"}}
            id="outlined-basic"
            label="Description"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={onShiftArea}
          />
        </Grid>
        {postToEdit && (
          <Grid  size={12}>
            <Typography variant="body1">
              Created on: {dayjs(postToEdit.datetime).format('DD.MM.YYYY h:mm A')}
            </Typography>
          </Grid>
        )}
        <Grid size={12}>
          <Button type="submit" sx={{width: "100%"}} variant="contained">Add</Button>
          {postToEdit ? 'Edit' : 'Add'}
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
