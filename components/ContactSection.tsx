import React from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";
import Image from 'next/image'



export default function ContactSection(): JSX.Element {
  return (
    <Box >
      <Container maxWidth="md" style={{ marginTop: '-30px' }}>
        <Grid container alignItems="center" >
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Have a Question?</Typography>
            <Typography variant="body1">Get in Touch.</Typography>
            <Button
                  href="https://calendly.com/avnerlipszyc/medtrix-demo"
                  variant="contained"
                  >
                  Contact Us
                </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container style={{ marginRight: '-1px' }} >
            <Image src="/Contact2.svg" width={450} height={450} alt={""}  />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
