import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { MenuItem } from "../utils/menuItems";
import { useCartContext } from "../utils/useCart";

export const FoodCard = (menuItem: MenuItem) => {
  const { title, price, photoUrl } = menuItem;
  const { addToCart } = useCartContext();

  return (
    <Card>
      <CardHeader title={title} subheader={`$${price}`} />
      <CardMedia component="img" height="194" image={photoUrl} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione beatae eligendi fuga dolore, eaque ad vel
          inventore, id reprehenderit quidem in ex maiores, numquam eum itaque perspiciatis. Porro, vel consequuntur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          onClick={() => {
            addToCart(menuItem);
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
