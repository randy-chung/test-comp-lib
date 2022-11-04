import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {}

export function Button(props: ButtonProps) {
  return <MuiButton>{props.children}</MuiButton>;
}
