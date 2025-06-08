import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  LocationOn,
  DeleteOutline,
  LocalShipping,
  ShieldOutlined,
  EventNote,
  CreditCard,
} from '@mui/icons-material';

const steps = [
  { label: 'Postcode', icon: <LocationOn /> },
  { label: 'Waste Type', icon: <DeleteOutline /> },
  { label: 'Select Skip', icon: <LocalShipping /> },
  { label: 'Permit Check', icon: <ShieldOutlined /> },
  { label: 'Choose Date', icon: <EventNote /> },
  { label: 'Payment', icon: <CreditCard /> },
];

const StepProgress = ({ currentStep = 1 }) => {
  return (
   <Box
  sx={{
    display: {
      xs: 'none',
      sm: 'none',
      md: 'flex',
    },
    alignItems: 'center',
    px: 4,
    py: 2,
    borderRadius: 2,
    backgroundColor: '#fff', // Optional for better contrast
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Elegant soft shadow
  }}
>
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: index < currentStep ? '#e67700' : '#6b7280',
            }}
          >
            {React.cloneElement(step.icon, {
              fontSize: 'small',
              sx: { mb: 0.5 },
            })}
            <Typography
              variant="caption"
              sx={{
                fontWeight: 500,
              }}
            >
              {step.label}
            </Typography>
          </Box>

          {index < steps.length - 1 && (
            <Box
              sx={{
                width: 40,
                height: 2,
                backgroundColor: index < currentStep - 1 ? '#e67700' : '#374151',
                mx: 1,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default StepProgress;

