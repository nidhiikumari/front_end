import { Box, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
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
              color: "#FFFFFF"
            }}
          >
            <Typography variant="h2">Skills</Typography>
            <Box sx={{
              // display
            }}>
                
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
