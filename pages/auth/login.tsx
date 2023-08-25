import NextLink from "next/link";
import { Box, Button, Grid, Link, TextField } from "@mui/material";
//import { useForm } from 'react-hook-form';

//import { AuthLayout } from '../../components/layouts/AuthLayout';

// type FormData = {
//     email: string,
//     password: string
// }

const LoginPage = () => {
  // const onLoginUser = ( data: FormData ) => {
  //     console.log( {data} );
  // }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
    <form>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box >
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
              sx={{backgroundColor:"primary"}}
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/register" passHref>
              ¿No tienes cuenta?
            </NextLink>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/" passHref>
              volver
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </form>
    </Box>
  )
}

export default LoginPage

