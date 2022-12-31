import { Button, Container, Box } from "@mui/material";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Page from "../components/layout/Page";
import HeroSection from "../components/HeroSection";
import React from "react";
import FeatureContainer from "../components/FeatureContainer";
import FeatureBlocksContainer from "../components/FeatureBlocksContainer";
import FeatureBlock from "../components/FeatureBlock";
import ContactSection from "../components/ContactSection";
import Dashboard from "../components/Dashboard"
import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <HeroSection
        title="Medtrix"
        subtitle="Billing Analytics, the Right Way."
        image="data.svg"
      >
         
        <Button href="https://calendly.com/avnerlipszyc/medtrix-demo" variant="contained"   >Get started
        </Button>
        
        {/* <Link href="/ios" passHref> */}
        <Button disableElevation >
          
        </Button>
        {/* </Link> */}
      </HeroSection>
      
      <FeatureContainer >
        <FeatureBlocksContainer>
          <FeatureBlock
            title="Analyze Risk"
            icon={<PeopleIcon color="secondary"/>}
            content={
              <>
                Know if and at what cost your patients will be able to pay their out-of-pocket bill in full.
              </>
            }
          />
          <FeatureBlock
            title="Optimize Payment Plans" 
            icon={<StarIcon color="secondary"/>}
            content={
              <>
                Offer your patients data driven payment plans guaranteed to boost your revenue.
              </>
            }
          />
          <FeatureBlock
            title="Maximize Revenue"
            icon={<AttachMoneyIcon color="secondary"/>}
            content={
              <>
                Predict when your patients will pay their bills or when its time to send it to collections.
              </>
            }
          />
             
        </FeatureBlocksContainer>
      </FeatureContainer> 
      <Box>
        <Dashboard/>
      </Box>
      <Box >
        <ContactSection  />
      </Box>
    </Page>
  );
}