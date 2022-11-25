import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFormAPI';
import Videos from './Videos';

const VideoDetails = () => {

  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  const {id }=  useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetails(data.items[0]));
    
      fetchFromAPI(`search?part=snippet&relatedVideoId=${id}&type=video`)
      .then((data)=> setVideos(data.items));

  },[id]);

  console.log(videoDetails);
  
  if(!videoDetails?.snippet) return 'Loading...';


  const {snippet: {title, channelId, channelTitle}, statistics: {likeCount, viewCount} } = videoDetails;
  return (
    <Box minHeight='94.2vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'static', top: '86px' }}>
            <Box>

           <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player"  controls/>
            </Box>
           <Typography variant='h6' fontWeight='bold' p={2}> {title} </Typography>
           <Stack direction='row' justifyContent='space-between' py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Box>
              {/* <CardMedia image={high.url} alt={title} sx={{width: "60px", height: "60px", borderRadius: '50%'}} /> */}
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} fontWeight='bold'  sx={{color:'#fff'}}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', ml:'5px', color: '#919191'}}/>
                   </Typography>
              </Box>
            </Link>
            <Stack direction='row' gap={2} alignItems='center'>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
           </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
      

    </Box>
  )
}

export default VideoDetails;