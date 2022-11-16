import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelUrl, demoVideoUrl } from '../utils/constants';
const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    console.log(videoId, snippet);
  return (
    <Card sx={{width: {md:'320px', xs:'100%'}, boxShadow: 'none', borderRadius: '10px' }}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl }>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width:'100%', height:180}}
        />
      </Link>
      <CardContent sx={{width:'90%', background: '#1e1e1e', height:80}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl }>
      <Typography  variant='subtitle1' sx={{ textOverflow: 'ellipsis', width: "100%", height:'60px', color: '#ffff', overflow: 'hidden', }}>
        {snippet?.title}
      </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl }>
      <Typography  variant='subtitle2' fontWeight='bold' sx={{ textOverflow: 'ellipsis', width: "90%",  color: '#757575' }}>
        {snippet?.channelTitle}
        <CheckCircle sx={{ fontSize: '12px', ml:'5px'}}/>
      </Typography>
      </Link>
      </CardContent>
    </Card>
    
  )
}

export default VideoCard;