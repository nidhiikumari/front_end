"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import DeveloperImage from "@/app/assets/images/lightBlue.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Service = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h2">My recent works</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{ color: "#ffffff", textTransform: "capitalize" }}
                    label="All"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ color: "#ffffff", textTransform: "capitalize" }}
                    label="Web Development"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{ color: "#ffffff", textTransform: "capitalize" }}
                    label="Mobile Development"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "5rem",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      width: '25rem',
                      textAlign: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      position: "relative",
                      WebkitBackdropFilter: 'blur(10px)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Image
                      src={DeveloperImage}
                      style={{ width: "15rem", height: "15rem" }}
                      alt="img"
                    />
                  </Box>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      width: '25rem',
                      textAlign: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      position: "relative",
                      WebkitBackdropFilter: 'blur(10px)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Image
                      src={DeveloperImage}
                      style={{ width: "15rem", height: "15rem" }}
                      alt="img"
                    />
                  </Box>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      width: '25rem',
                      textAlign: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(255,255,255,0.4)",
                      position: "relative",
                      WebkitBackdropFilter: 'blur(10px)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Image
                      src={DeveloperImage}
                      style={{ width: "15rem", height: "15rem" }}
                      alt="img"
                    />
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
