import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({channel, marginTop}) => {
  // console.log(channel);
  return (
    <Box sx={{width: {xs:'100%', sm:'300px', md: '320px'}, height: '300px', boxShadow: 'none', borderRadius: '0px', background: '#1e1e1e0', marginTop, }}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column',  alignItems:'center',color: '#fff'}}>
          <CardMedia image={channel?.snippet?.thumbnails?.high?.url} alt={channel?.snippet?.title} sx={{width: "160px", height: "160px", borderRadius: '50%'}} />
          <Typography variant='h6' sx={{textOverflow: 'ellipsis', mt: 4,display: 'flex', alignItems: 'center'}}>
            {channel?.snippet?.title}
          <CheckCircle sx={{ fontSize: '16px', ml:'5px', color: '#919191'}}/>
          </Typography>
          {channel?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>

      </Link>
    </Box>
  )
}

export default ChannelCard;