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
    <Box px={4} py={4} gap={3} display="flex" flexDirection="column">
      <Typography variant="h3">Your reservation is confirmed!</Typography>
      <Typography variant="body1">We'll send you a confirmation email shortly.</Typography>
      <Typography variant="caption">You will be redirected to the home page in 5 seconds.</Typography>
    </Box>
  );
};

export default BookSuccess;
