import { styled, Typography } from "@mui/material";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra para o Toolbar
  }));

  const StyledAppBar = styled(AppBar)({
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Sombra para profundidade no AppBar
  });

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    fontSize: "1.2rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Sombra nos textos para efeito 3D
    "&:hover": {
      transform: "scale(1.05)", // Leve aumento ao passar o mouse
      transition: "transform 0.3s ease",
    },
  }));

  return (
    <>
      <StyledAppBar position="relative">
        <StyledToolbar>
          <Typography variant="h6">
            <StyledMenuItem>About</StyledMenuItem>
          </Typography>
          <Typography variant="h6">
            <StyledMenuItem>Skills</StyledMenuItem>
          </Typography>
          <Typography variant="h6">
            <StyledMenuItem>Projects</StyledMenuItem>
          </Typography>
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default Navbar;

  