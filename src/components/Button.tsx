import { ButtonProps, Button as MuiButton } from "@mui/material";

export default function Button({ sx, ...props }: ButtonProps) {
  return <MuiButton sx={{ textTransform: "capitalize", ...sx }} {...props} />;
}
