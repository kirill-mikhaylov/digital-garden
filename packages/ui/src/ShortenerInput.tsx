"use client";

import { TextField } from "@mui/material";

export const ShortenerInput = () => {
  const label = `Paste a link to shorten`;

  return (
    <TextField
      id="outlined-basic"
      name="link"
      label={label}
      variant="outlined"
    />
  );
};

ShortenerInput.displayName = "ShortenerInput";
