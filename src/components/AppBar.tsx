import { Close, Menu } from "@mui/icons-material";
import { Box, Drawer, Hidden, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Image } from "mui-image";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE, theme } from "../theme";
import { AppLink } from "../ui/AppLink";
import { mainSiteLinks } from "../utils/siteMainLinks";

const MobileAppBarContents = memo(({ onClose }: { onClose: () => void }) => (
  <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between" p={2}>
    {/* header */}
    <IconButton onClick={onClose} sx={{ alignSelf: "flex-end" }}>
      <Close />
    </IconButton>
    {/* body */}
    <Box display="grid" gap={2} justifyContent="center" component="nav">
      {mainSiteLinks.map(({ label, to }) => (
        <AppLink to={to} onClick={onClose} key={label}>
          <Typography textAlign="center">{label}</Typography>
        </AppLink>
      ))}
    </Box>
    {/* footer */}
    <Box display="flex" justifyContent="center" height={36} gap={2} alignItems="center">
      <Image alt="logo" src="/assets/LemonYellow.png" height="100%" width="auto" />
      <Typography variant="caption" textAlign="center">
        Copyright {new Date().getFullYear()} Little Lemon
      </Typography>
    </Box>
  </Box>
));

const MobileAppBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onClose = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1} flex={1}>
      <IconButton onClick={() => setMobileMenuOpen(true)}>
        <Menu />
      </IconButton>
      <Image alt="logo" src="/assets/LittleLemonHorizontalYellow.png" height="100%" width="auto" />
      <Box />
      <Drawer open={mobileMenuOpen} onClose={onClose} PaperProps={{ sx: { width: "100%" } }}>
        <MobileAppBarContents onClose={onClose} />
      </Drawer>
    </Box>
  );
};

const DesktopAppBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={4} flex={1} py={1.5}>
      <Image alt="logo" src="/assets/LittleLemonHorizontalYellow.png" height="100%" width="auto" />
      <Box component="nav" display="flex" gap={2}>
        {mainSiteLinks.map(({ label, to }) => (
          <AppLink to={to} key={label}>
            <Typography>{label}</Typography>
          </AppLink>
        ))}
      </Box>
    </Box>
  );
};

const AppBar = () => {
  const scrollYRef = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!headerRef.current) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollDirection = scrollY > scrollYRef.current ? "down" : "up";

    if (scrollDirection === "down" && scrollY > HEADER_HEIGHT_DESKTOP)
      headerRef.current.style.transform = `translateY(-${HEADER_HEIGHT_DESKTOP}px)`;
    else headerRef.current.style.transform = "translateY(0px)";

    scrollYRef.current = scrollY;
  }, []);

  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      window.removeEventListener("scroll", handleScroll);
      headerRef.current && (headerRef.current.style.transform = "translateY(0px)");
    } else window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, mobile]);

  return (
    <Box
      height={{ xs: HEADER_HEIGHT_MOBILE, md: HEADER_HEIGHT_DESKTOP }}
      bgcolor={theme.palette.grey[300]}
      display="flex"
      position="fixed"
      width="100%"
      ref={headerRef}
      sx={{
        transition: "transform 0.3s ease-in-out",
      }}
      zIndex={theme.zIndex.appBar}
    >
      <Hidden mdUp>
        <MobileAppBar />
      </Hidden>
      <Hidden mdDown>
        <DesktopAppBar />
      </Hidden>
    </Box>
  );
};

export default AppBar;
