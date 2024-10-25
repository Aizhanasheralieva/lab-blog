import { Typography } from '@mui/material';

const Contacts = () => {
  return (
    <>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        I welcome your questions, comments and feedback.
      </Typography>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        Please, feel free to ask questions and contact me in case you would like to share with your personal quotes.
      </Typography>
      <Typography>
        I aim to reply within three working days, but if your question requires more detailed information or is of a
        technical nature, our response time may be longer.
      </Typography>

    </>
  );
};

export default Contacts;
