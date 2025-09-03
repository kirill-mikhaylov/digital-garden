'use client';

import * as React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

interface ButtonProps extends Omit<MUIButtonProps, 'children'> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MUIButton
      variant="contained"
      {...props}
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '16px',
        ...props.sx,
      }}
    >
      {children}
    </MUIButton>
  );
};

Button.displayName = 'Button';
