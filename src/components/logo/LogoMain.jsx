'use client';

// @mui
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';
import Typography from "@mui/material/Typography";

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  const logoMainPath = branding.logo.main;

  return (
    <Box sx={{width: {xs: 112, lg: 140}, height: {xs: 22, lg: 26}}} flexDirection="row" display="flex"
         alignItems="center">
      <CardMedia src={logoMainPath} component="img" alt="logo" sx={{width: {xs: 50, lg: 50}}} loading="lazy"/>
      <Typography
        sx={{
          fontSize: {xs: 18, lg: 24},
          fontWeight: 700,
          lineHeight: {xs: '22px', lg: '26px'},
          color: (theme) => theme.palette.text.primary,
          ml: 1,
          display: {xs: 'none', lg: 'block'},
        }}
      >
        FrostWing
      </Typography>
    </Box>
  );
}
