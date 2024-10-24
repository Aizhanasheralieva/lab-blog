import { useState } from "react";
import { IPostForm } from "../../types";
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const PostForm = () => {
  const [form, setForm] = useState<IPostForm>({
    title: "",
    description: "",
  });

  const onShiftArea = (e: React.FormEvent<HTMLFormElement>) => {
    const {name, value} = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography
        variant="h4"
        sx={{ flexGrow: 1, textAlign: "center" }}
      >
        Add new post
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
        <Grid size={12}>
          <Button type="submit" sx={{width: "100%"}} variant="contained">Save</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
