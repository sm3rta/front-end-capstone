import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "@tanstack/router";
import Image from "mui-image";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE, theme } from "./theme";

Image.defaultProps = {
  duration: 300,
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Box
        component="main"
        mt={{ xs: `${HEADER_HEIGHT_MOBILE}px`, md: `${HEADER_HEIGHT_DESKTOP}px` }}
        display="grid"
        flex={1}
      >
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
