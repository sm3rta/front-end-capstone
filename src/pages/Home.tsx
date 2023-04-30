import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Rating, Typography } from "@mui/material";
import { FoodCard } from "../components/FoodCard";
import { theme } from "../theme";
import { AppLink } from "../ui/AppLink";
import { featuredMenuItems } from "../utils/menuItems";

const imageUrl =
  "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Hero = () => (
  <Box
    sx={{
      minHeight: "clamp(250px, 40vh, 350px)",
      display: "flex",
      flex: 1,
      width: "100%",
      backgroundImage: {
        xs: "unset",
        md: `linear-gradient(to right, ${theme.palette.secondary.dark},${theme.palette.secondary.dark}, transparent), url("${imageUrl}")`,
      },
      backgroundColor: { xs: theme.palette.secondary.dark, md: "unset" },
      backgroundSize: "cover",
      py: 4,
    }}
  >
    <Container>
      <Typography variant="h1" color="primary.light">
        Little Lemon
      </Typography>
      <Typography variant="h3" component="h2" color="primary" mt={-1}>
        Chicago
      </Typography>
      <Typography color={theme.palette.secondary.contrastText} mt={4} maxWidth="sm">
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </Typography>
      <Box display="flex" gap={2} mt={4}>
        <Button variant="contained" component={AppLink} to="/book">
          Book a table
        </Button>
        <Button variant="contained" component={AppLink} to="/menu">
          See menu
        </Button>
      </Box>
    </Container>
  </Box>
);

const Featured = () => (
  <Box bgcolor={theme.palette.grey[200]}>
    <Container sx={{ py: 4 }}>
      <Typography mb={4} variant="h4">
        Best sellers <span role="img">🔥</span>
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {featuredMenuItems.map((foodItem) => (
          <Grid item xs={12} md={6} lg={4} key={foodItem.title}>
            <FoodCard {...foodItem} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const ratings = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    date: "2023-10-10",
  },
  {
    name: "Jane Doe",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    date: "2023-10-10",
  },
  {
    name: "Johnathan Doe",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    date: "2023-10-10",
  },
];

const Ratings = () => (
  <Box bgcolor={theme.palette.grey[200]}>
    <Container sx={{ py: 4 }}>
      <Typography mb={4} variant="h4">
        What others said about us
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {ratings.map(({ comment, date, name, rating }) => (
          <Grid item xs={12} md={6} lg={4} key={name}>
            <Card>
              <CardHeader title={name} subheader={date} />
              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={4}>
                  {comment}
                </Typography>
                <Rating value={rating} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Ratings />
    </>
  );
};

export default Home;
