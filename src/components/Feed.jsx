import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fatchFromAPI } from '../utils/fatchFormAPI';
import { SideBar, Videos } from './';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fatchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
      <Box sx={{ height:{sx:"auto", md:"93.8vh"}, borderRight:"1px solid #3d3d3d", px:{sx: 0, md: 2} }}>
        <SideBar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        />
        <Typography className='copyright' variant='body2' pt={1.5}>
          Copyright 2022 @SA 
        </Typography>
      </Box>
      <Box pl={2} sx={{overflow: "auto", height:"92vh", flex:2}}>
        <Typography variant='h5' py={2} fontWeight="bold">
          {selectedCategory} <span style={{color: "#fc1503"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed;