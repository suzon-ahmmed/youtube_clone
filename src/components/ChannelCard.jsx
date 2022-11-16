import { Box, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetails}) => {
  return (
    <Box>
      <Link to={`/channels/${channelDetails?.id?.channelId}`}>
        <CardContent>
          <CardMedia image='' alt='' />
        </CardContent>

      </Link>
    </Box>
  )
}

export default ChannelCard;