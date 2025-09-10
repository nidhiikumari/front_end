import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage from "@/app/assets/images/girlWeb.webp";

const About = () => {
  return (
    <div>
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
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              color: "#FFFFFF",
            }}
          >
            <Typography variant="h2">About Me</Typography>
            <Box>
              <Typography>
                I am a passionate Frontend Developer with 2.5 years of
                experience in creating responsive, efficient, and user-friendly
                web applications. My expertise includes HTML, CSS, JavaScript,
                and various modern frontend frameworks and libraries. I am
                committed to writing clean, reusable code and optimizing
                performance for a seamless user experience.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              style={{
                height: "30rem",
              }}
              src={bannerImage}
              alt="banner"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
