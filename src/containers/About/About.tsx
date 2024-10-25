import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About = () => {
  return (
    <>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        Welcome to my Blog. Here in this page I share with motivational quotes about success, for work and best
        motivational quotes to start your day.
      </Typography>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Motivational Quotes To Inspire You
      </Typography>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        The right motivational quote can change things—helping you ditch the
        excuses, escape your comfort zone, and take action. Here are some motivational quotes from successful
        business people and public figures, past and present.
      </Typography>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        Finding a motivational quote that resonates with you is an energizing feeling.
      </Typography>
      <Typography variant="h5" component="div" sx={{ ms: "auto", mb: 3 }}>
        Inspirational statements often seem like our own opinions reflected back at us—with the added clarity that comes
        from some of the greatest minds in history.
      </Typography>
      <Grid container spacing={2} sx={{mb: 3}}>
        <Grid>
          <Card sx={{ maxWidth: 345, mb: 3 }}>
            <CardMedia
              sx={{ height: 170 }}
              image="https://web.archive.org/web/20241009125857/https://cdn.shopify.com/s/files/1/0070/7032/files/nelson-mandela-quote.png?v=1706739919"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quotes for students
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                “Education is the most powerful weapon which you can use to change the world.” —Nelson Mandela
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 170 }}
              image="https://cdn.shopify.com/s/files/1/0070/7032/files/michael-jordan-quote.png?v=1706740012"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Team motivational quotes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                “Talent wins games, but teamwork and intelligence win championships.” —Michael Jordan
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 170 }}
              image="https://cdn.shopify.com/s/files/1/0070/7032/files/rogers-quote.png?v=1706739736"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quotes for personal life
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                “The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”
                —Winston Churchill
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
    </>

  );
};

export default About;
