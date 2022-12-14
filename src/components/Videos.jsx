import { Box, CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {

  if(!videos) return <Box minHeight='95vh'> <CircularProgress color="inherit" /></Box>;
  // console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent='center' gap={2} >
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard  video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos;