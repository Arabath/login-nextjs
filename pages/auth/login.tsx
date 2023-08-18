import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
//import { useForm } from 'react-hook-form';

//import { AuthLayout } from '../../components/layouts'

// type FormData = {
//     email: string,
//     password: string
// }

const LoginPage = () => {
  // const onLoginUser = ( data: FormData ) => {
  //     console.log( {data} );
  // }

  return (
    <form>
      <Grid item xs={12}>
        <Box>
          Iniciar Sesión
        </Box>
      </Grid>

      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              variant="filled"
              fullWidth
              //{...register('email')}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
              //{...register('password')}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              type="submit"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/register" passHref>
              <Link underline="always">¿No tienes cuenta?</Link>
            </NextLink>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/" passHref>
              <Link underline="always">volver</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default LoginPage;

/*
                <Grid item xs={12}>
                    <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
                </Grid>
                */
