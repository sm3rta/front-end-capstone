import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export const FoodCard = ({ title, price, photoUrl }: { title: string; price: number; photoUrl: string }) => {
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
    </Card>
  );
};
