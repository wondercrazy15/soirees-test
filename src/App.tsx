import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardLayout from './layout';
import { HomePage } from './page';
import { Stack } from '@mui/system';

function App() {
  return (
    <Stack className=''>
      <DashboardLayout >
        <HomePage />
      </DashboardLayout>
    </Stack>

  );
}

export default App;
