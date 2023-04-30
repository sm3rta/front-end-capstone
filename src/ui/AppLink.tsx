import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "@tanstack/router";
import { ComponentProps, forwardRef, memo } from "react";
import { theme } from "../theme";

export type AppLinkProps = Partial<ComponentProps<typeof RouterLink>> & Partial<ComponentProps<typeof MuiLink>>;

export const AppLink = memo(
  forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => (
    <MuiLink
      component={RouterLink}
      to="/"
      search={{}}
      params={{}}
      color={theme.palette.secondary.dark}
      ref={ref}
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
        ...props.sx,
      }}
      {...props}
    />
  ))
);
