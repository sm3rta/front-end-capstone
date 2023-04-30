import { Box, Container, Grid, Typography } from "@mui/material";
import { FoodCard } from "../components/FoodCard";
import { theme } from "../theme";
import { menuItems } from "../utils/menuItems";

const Menu = () => {
  return (
    <>
      <Box
        bgcolor={theme.palette.secondary.dark}
        p={4}
        minHeight={200}
        display="flex"
        // flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color={theme.palette.primary.main} variant="h1">
          Our menu
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={{ xs: 2, md: 4 }} py={6}>
          {menuItems.map((foodItem) => (
            <Grid item xs={12} md={6} lg={4} key={foodItem.title}>
              <FoodCard {...foodItem} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Menu;
