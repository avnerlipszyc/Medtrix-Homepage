import {
    Container,
    Grid,
    Box,
    Divider,
    Button,
  } from "@mui/material";
  import Link from "next/link";
  import { useUser } from '@auth0/nextjs-auth0/client';
  import React from 'react';
  
  export default function Header(): JSX.Element {
    const { user, isLoading } = useUser();

    return (
      <Box
       
      >
        <Container >
          <Grid container alignItems="center">
            <Grid item xs={2}>
            <Link href="/" passHref>
            <Container style={{ marginTop: '5px' }} >
              <img src="/Vector.svg" width={150} height={60}  />
            </Container>
              </Link>
            </Grid>
            <Grid container item xs={10} justifyContent="flex-end">
           
              
                <Button
                  href="https://calendly.com/avnerlipszyc/medtrix-demo"
                  variant="contained"
                  
                  >
                  Schedule a Demo
                </Button>
              
           
           
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </Box>
    );
  }