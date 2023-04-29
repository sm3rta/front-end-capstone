import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "@tanstack/router";
import { ComponentProps, memo } from "react";
import { theme } from "../theme";

export const AppLink = memo(
  (props: Partial<ComponentProps<typeof RouterLink>> & Partial<ComponentProps<typeof MuiLink>>) => (
    <MuiLink
      component={RouterLink}
      to="/"
      search={{}}
      params={{}}
      color={theme.palette.secondary.dark}
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
        ...props.sx,
      }}
      {...props}
    />
  )
);
