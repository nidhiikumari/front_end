import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage from "@/app/assets/images/girlWeb.webp";
import InputForm from "./InputForm";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000034",
        p: 11,
        color: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">Got a project in</Typography>
          <Typography variant="h2">mind</Typography>
          <Image
            style={{
              height: "30rem",
            }}
            src={bannerImage}
            alt="banner"
          />
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",
          }}
        >
          <InputForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
