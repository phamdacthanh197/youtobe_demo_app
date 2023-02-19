import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar,Videos } from './';
import {fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])
useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
},[selectedCategory])

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{ 
        height: { sx: 'auto', md: '90vh'},
        borderRight: '1px solid #918E8E',
        px: { sx: 0, md: 2},
        pb: { sx: 0, md: 1}
        }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright'
          variant='body2' sx={{ mt:1.5, color: '#fff'}}
        >
          Copyright 2022 JSM media
        </Typography>
      </Box>
      
      <Box sx={{
        overflowY: "auto",
        height: '90vh',
        flex: 2,
        p: 2
      }}>
        <Typography 
          variant='h4'
          fontWeight="bold"
          mb= {2}
          sx={{ color: 'white'}}
        >
          {selectedCategory} <span style={{ color: "#f31503", fontSize: "20px", verticalAlign: "super"}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>

      </Box>
      </Stack>
  )
}

export default Feed