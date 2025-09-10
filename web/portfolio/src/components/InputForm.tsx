"use client";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

const InputForm = () => {
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Box sx={{ display: "grid", gap: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography>Your name</Typography>
          <TextField
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "20rem",
                "& fieldset": {
                  borderColor: "#000000", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "blue", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "blue", // Border color when focused
                },
                backgroundColor: "#ffffff", // Background color
              },
            }}
            id="outlined-basic"
            label=""
            placeholder="Name"
            variant="outlined"
          />
        </Box>
        <Box>
          <Typography>Your email</Typography>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "20rem",
                "& fieldset": {
                  borderColor: "#000000", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "blue", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "blue", // Border color when focused
                },
                backgroundColor: "#ffffff", // Background color
              },
            }}
            id="outlined-basic"
            label=""
            placeholder="Email"
            variant="outlined"
          />
        </Box>
      </Box>
      <Box>
        <Typography>Your message</Typography>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              width: "42rem",
              "& fieldset": {
                borderColor: "#000000", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "blue", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue", // Border color when focused
              },
              backgroundColor: "#ffffff", // Background color
            },
          }}
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          placeholder="Message"
        />
      </Box>
      <Button
        variant="contained"
        sx={{ mt: 2, p: 2, backgroundColor: "#15a3c7" }}
      >
        Send Message
        <SendIcon sx={{ fill: "white", ml: 2 }} />
      </Button>
    </Box>
  );
};

export default InputForm;
