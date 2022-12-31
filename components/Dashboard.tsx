import React from "react";
import { Typography, Box, Grid, Container, Button } from "@mui/material";
import Image from "next/image";

export default function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="md" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"70px" }} >
     
          <Grid >
            <Container>
              <Image src="/Dashboard1.svg" width={750} height={700} alt={""}  />
            </Container>
          </Grid>
       
     
    </Container>
  );
}