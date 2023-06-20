import React from 'react';
import Form from '../components/ContactsForm/FormAddContact';
import FormSearch from '../components/ContactsForm/FormSearch';
import ContactsList from '../components/ContactsList/ContactsList';

import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const styles = {
  container: {
    textAlign: 'center',
  },
};

function ContactsPage() {
  return (
    // <React.Fragment>
    //   <div style={styles.container}>
    //     <h1>Add new contact</h1>
    //     <Form />
    //     <h2>Contacts List</h2>
    //     <FormSearch />
    //     <ContactsList />
    //   </div>
    // </React.Fragment>

    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
            }}
          >
            <div style={styles.container}>
              <h1>Add new contact</h1>
              <Form />
              <h2>Contacts List</h2>
              <FormSearch />
              <ContactsList />
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ContactsPage;
