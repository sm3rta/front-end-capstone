import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { theme } from "../theme";

const About = () => {
  return (
    <>
      <Box
        bgcolor={theme.palette.secondary.dark}
        p={4}
        minHeight={200}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color={theme.palette.primary.main} variant="h1">
          About us
        </Typography>
      </Box>
      <Container>
        <Typography py={6}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi corporis rem optio! Temporibus
          vero impedit fugit debitis doloremque expedita maiores soluta eaque cupiditate, veritatis architecto
          repellendus tempore eius perspiciatis?
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} py={6}>
          {[
            {
              name: "John Doe",
              position: "Founder",
              photoUrl:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              name: "Jane Doe",
              position: "Business advisor",
              photoUrl:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              name: "John Smith",
              position: "Chief Cook",
              photoUrl:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          ].map(({ name, position, photoUrl }) => (
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardHeader title={name} subheader={position} />
                <CardMedia component="img" height="280" image={photoUrl} alt={name} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione beatae eligendi fuga dolore, eaque
                    ad vel inventore, id reprehenderit quidem in ex maiores, numquam eum itaque perspiciatis. Porro, vel
                    consequuntur.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth>Contact</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default About;
