import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage from '@/app/assets/images/girlWeb.webp'

const IntroBanner = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#000034", p: 11, color: '#FFFFFF', alignItems: 'center' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <Box sx={{
            color: '#FFFFFF'
          }}>
            <Typography variant="h2">Frontend Developer,</Typography>
            <Typography variant="h2">Creative UI Designer</Typography>
            <Box>
              <Typography>Hire me</Typography>
              <Typography>Download CV</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Image style={{
              height: '30rem'
            }} src={bannerImage} alt="banner" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default IntroBanner;
