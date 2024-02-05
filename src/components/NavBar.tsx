import { Stack, Typography } from "@mui/material";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <img src={logo} style={{ width: "60px", height: "auto" }} />
      <Typography style={{ textAlign: "center" }}>NavBar</Typography>
    </Stack>
  );
};

export default NavBar;
