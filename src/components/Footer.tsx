import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { theme } from "../theme";
import { AppLink } from "../ui/AppLink";
import { mainSiteLinks } from "../utils/siteMainLinks";

const footerLinks: Array<{
  title: string;
  links: typeof mainSiteLinks;
}> = [
  {
    title: "Site links",
    links: mainSiteLinks,
  },
  {
    title: "Info & Contact",
    links: [
      { label: "Contact", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Press", to: "/" },
      { label: "Blog", to: "/" },
    ],
  },
  {
    title: "Policy",
    links: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
      { label: "Legal Notices", to: "/" },
      { label: "FAQ", to: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <Container>
        <Grid container component="footer" px={{ xs: 4, md: 8 }} py={4} spacing={6} justifyContent="center">
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: "center", md: "flex-start" }}>
            <Image alt="logo" src="/assets/LittleLemonVerticalYellow.png" width={100} />
          </Grid>
          <Grid item container xs={12} md={8} spacing={2}>
            {footerLinks.map((arr) => (
              <Grid item xs={12} sm={6} md={4} key={arr.title}>
                <Typography mb={2} color={theme.palette.secondary.contrastText}>
                  {arr.title}
                </Typography>
                {arr.links.map(({ label, to }) => (
                  <AppLink to={to} color={theme.palette.primary.dark} key={label}>
                    <Typography>{label}</Typography>
                  </AppLink>
                ))}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" height={72} gap={2} alignItems="center">
            <Image alt="logo" src="/assets/LemonYellow.png" height="100%" width="auto" />
            <Typography variant="caption" textAlign="center" color={theme.palette.primary.dark}>
              Copyright {new Date().getFullYear()} Little Lemon
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
