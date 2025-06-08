import './App.css';
import { Container, Grid, Box } from '@mui/material';
import SkipHireCard from './components/SkipHireCard';
import { fetchSkipHireOptions } from './data/skipHireOptions';
import StepProgress from './components/StepProgress';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CustomHeader from './components/CustomHeader';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
     setData(fetchSkipHireOptions())
  }, [setData])


  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', mb: 6}}>
    <Box>
      <Navbar/>
    </Box>
      <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
        <StepProgress currentStep={4} />
      </Box>
       <CustomHeader 
          title="Find Your Perfect Fit"
          subtitle="Pick the skip size that’s just right for your project—big or small, we’ve got you covered!"/>
      <Container maxWidth="lg"
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{mt: 4}}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <SkipHireCard hireData={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
