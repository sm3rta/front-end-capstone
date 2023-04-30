import { Add, Close, Menu, Remove, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Image } from "mui-image";
import { MouseEvent, memo, useCallback, useEffect, useRef, useState } from "react";
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE, theme } from "../theme";
import { AppLink } from "../ui/AppLink";
import { mainSiteLinks } from "../utils/siteMainLinks";
import { useCartContext } from "../utils/useCart";

const MobileDrawerContents = memo(({ onClose }: { onClose: () => void }) => (
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
      <Box>
        <Cart />
      </Box>
      <Drawer open={mobileMenuOpen} onClose={onClose} PaperProps={{ sx: { width: "100%" } }}>
        <MobileDrawerContents onClose={onClose} />
      </Drawer>
    </Box>
  );
};

const Cart = () => {
  const { cart, calculateTotal, clearCart, decreaseByOne, increaseByOne, removeFromCart } = useCartContext();
  const cartCount = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <>
      <Badge badgeContent={cartCount} color="primary" sx={{ "&>.MuiBadge-badge": { top: 4, right: 4 } }}>
        <IconButton aria-describedby={id} onClick={handleClick}>
          <ShoppingCart />
        </IconButton>
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ sx: { overflow: "auto" } }}
      >
        {cartCount === 0 ? (
          <Typography p={4}>Your cart is empty</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price per item</TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell>
                  <Button onClick={clearCart}>Clear cart</Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(({ id, title, price, quantity }) => (
                <TableRow key={id}>
                  <TableCell>{title}</TableCell>
                  <TableCell sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <IconButton onClick={() => decreaseByOne(id)}>
                      <Remove />
                    </IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton onClick={() => increaseByOne(id)}>
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{(price * quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        removeFromCart(id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell />
                <TableCell />
                <TableCell>${calculateTotal().toFixed(2)}</TableCell>
                <TableCell>
                  <Button>Checkout</Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </Popover>
    </>
  );
};

const DesktopAppBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px={4} flex={1} py={1.5}>
      <Image alt="logo" src="/assets/LittleLemonHorizontalYellow.png" height="100%" width="auto" />
      <Box display="flex" gap={6}>
        <Box component="nav" display="flex" gap={3} alignItems="center">
          {mainSiteLinks.map(({ label, to }) => (
            <AppLink to={to} key={label}>
              <Typography>{label}</Typography>
            </AppLink>
          ))}
        </Box>
        <Cart />
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
      component="header"
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
