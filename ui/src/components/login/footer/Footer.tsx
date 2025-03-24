import React from "react";
import { Typography, Box } from "@mui/material";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        Copyright © 2025 MBRKCL. Tüm hakları saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
