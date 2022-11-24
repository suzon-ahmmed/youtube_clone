import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchFromAPI } from '../utils/fetchFormAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box pl={2} sx={{overflow: "auto", height:"92vh", flex:2}}>
        <Typography variant='h5' py={2} fontWeight="bold">
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}/>
    </Box>
    
  );
}

export default SearchFeed;