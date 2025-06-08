import { Container, Typography, Box } from '@mui/material';

const CustomHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
          mt: 5,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
            color: '#1e293b',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: '1rem',
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Container>
  );
};

export default CustomHeader;
