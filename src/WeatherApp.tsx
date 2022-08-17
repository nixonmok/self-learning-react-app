import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Navbar from './component/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './component/header/Header';


function WeatherApp() {
  const [headerTitle, setTitle] = useState<string>("");
  const location = useLocation();

  useEffect(
    () =>{
      const realTitle = location.pathname.replace("/","").toUpperCase();
      
      setTitle(realTitle);
      console.log(realTitle);
    }, [location]
  )
  return (
    <Grid container>
      <Navbar />
      <Header title={headerTitle}/>
      <Outlet />
    </Grid>
  );

}

export default WeatherApp;
