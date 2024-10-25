// src/components/Hero/Hero.tsx
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/WhatsApp Image 2024-02-19 at 14.40.00.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, // Mantém o fundo original
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative", // Torna o posicionamento dos filhos relativo
    overflow: "hidden",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "90%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.main}`,
    position: "relative", // A imagem permanece no nível correto
    zIndex: 2, // Garante que o Avatar fique acima da animação
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <StyledImg src={Avatar} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Typography color="secondary.contrastText" variant="h1" textAlign="center">
              Ryan Monteiro
            </Typography>
            <Typography color="primary" variant="h2" textAlign="center">
              I'm a Programmer Front-end
            </Typography>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={12} md={6}>
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledButton>
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
