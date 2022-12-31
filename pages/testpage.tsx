import React from "react";
import { withPageAuthRequired, WithPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button } from "@mui/material";

const test = ( ) => {
    return(
        <Button>
            Private Access Only
        </Button>
    )
}

export default test

export const getServerSideProps = withPageAuthRequired();