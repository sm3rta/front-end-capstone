import { Box, Typography } from "@mui/material";
import { useRouter } from "@tanstack/router";
import { useEffect } from "react";

const BookSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.navigate({
        to: "/",
      });
    }, 5000);
  }, [router]);

  return (
    <Box px={4} py={4}>
      <Typography variant="h2">Your reservation is confirmed!</Typography>
      <Typography variant="body1">We'll send you a confirmation email shortly.</Typography>
      <Typography variant="body2">You will be redirected to the home page in 5 seconds.</Typography>
    </Box>
  );
};

export default BookSuccess;
