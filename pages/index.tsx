import type { NextPage } from "next";
//import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{backgroundColor: 'primary.main'}} height="calc(100vh)" >

        <Button href="/auth/login">
        Inicia Sesión
        </Button>
    </Box>
  );
};

export default HomePage;

