import React, { useEffect, useState } from 'react';
import { IPostForm } from '../../types';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import Textarea from '@mui/material/TextareaAutosize';

const initialForm = {
  title: '',
  description: '',
  datetime: '',
};

interface Props {
  postToEdit?: IPostForm;
  submitForm: (post: IPostForm) => void;
}

const PostForm: React.FC<Props> = ({postToEdit, submitForm}) => {
  const [form, setForm] = useState<IPostForm>({...initialForm});

  useEffect(() => {
    if (postToEdit) {
      setForm((prevState) => ({
        ...prevState,
        ...postToEdit,
      }));
    }
  }, [postToEdit]);

  const onShiftArea = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;

    setForm((prevState) => ({
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

    submitForm(postData);

    setForm({...initialForm});
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center'}}>
        {postToEdit ? 'Edit' : ' Add new'} post
      </Typography>
      <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Title"
            name="title"
            variant="outlined"
            required
            value={form.title}
            onChange={onShiftArea}
          />
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              py: 2,
              display: 'grid',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Textarea
              minRows={7}
              name="description"
              placeholder="Type in here description..."
              label="Description"
              variant="outlined"
              required
              value={form.description}
              onChange={onShiftArea}
            />
          </Box>
        </Grid>
        <Grid size={12}>
          <Button type="submit" sx={{width: '100%'}} variant="contained">
            {postToEdit ? 'Edit' : 'Add'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
