import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
  Fade,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function HelpPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Fade in={fadeIn} timeout={1000}>
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            width: "100%",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ mb: 7, width: "100%" }}>
            <Typography
              variant="h6"
              component="label"
              htmlFor="title"
              sx={{
                display: "block",
                color: "gray",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Topic
            </Typography>
            <TextField
              id="title"
              placeholder="Enter title"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  "&::placeholder": {
                    color: "text.primary",
                    opacity: 1,
                  },
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 3, width: "100%" }}>
            <Typography
              variant="h6"
              component="label"
              htmlFor="content"
              sx={{
                display: "block",
                color: "gray",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Content
            </Typography>
            <TextField
              id="content"
              placeholder="Enter your content"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  "&::placeholder": {
                    color: "text.primary",
                    opacity: 1,
                  },
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              Post
            </Button>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="photo">
                <PhotoCamera sx={{ color: "gray" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
}
