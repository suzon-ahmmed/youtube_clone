import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFormAPI';
import { SideBar, Videos } from './';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
      <Box sx={{ height:{sx:"auto", md:"94vh"}, borderRight:"1px solid #3d3d3d", px:{sx: 0, md: 2} }}>
        <SideBar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        />
        <Typography  variant='body2' pt={1.5} sx={{display: {xs: 'none', md: 'block'}, textAlign: 'center'}}>
          Copyright 2022 @SA 
        </Typography>
      </Box>
      <Box px={2} sx={{overflow: "auto", height:"95vh", flex:2}}>
        <Typography variant='h5' py={2} fontWeight="bold">
          {selectedCategory} <span style={{color: "#fc1503"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed;