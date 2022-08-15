import React from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';





function WeatherApp() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );

}

export default WeatherApp;
