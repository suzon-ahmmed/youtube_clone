import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoChannelUrl, demoVideoUrl } from '../utils/constants';
const VideoCard = ({video: {id: {videoId}, snippet}, video}) => {
    // console.log(video);
    const publishDate = new Date(snippet?.publishTime);
    // const currentDate = new Date();
    // const time = currentDate - publishDate;
    // console.log(currentDate);
  return (
    <Card sx={{width: {xs:'100%', sm:'300px', md: '310px', lg: '355px'   }, boxShadow: 'none', borderRadius: '0px' }}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl }>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width: {xs:'100%', sm:'300px', md: '310px', lg: '355px'}, height:180}}
        />
      </Link>
      <CardContent sx={{width:'100%', background: '#1e1e1e', height:135}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl }>
          <Typography  variant='subtitle1' sx={{ textOverflow: 'ellipsis', width: "100%", height:'60px', color: '#ffff', overflow: 'hidden', }}>
            {snippet?.title}
         </Typography>
       </Link>
       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl }>
         <Typography  variant='subtitle1' fontWeight='bold' sx={{ textOverflow: 'ellipsis',  width: "90%",  color: '#757575',display: 'flex', alignItems: 'center' }}>
            {snippet?.channelTitle}
           <CheckCircle sx={{ fontSize: '12px', ml:'5px'}}/>
          </Typography>
        </Link>
        <Typography  variant='subtitle2' fontWeight='bold' sx={{ textOverflow: 'ellipsis',  width: "90%",  color: '#757575',display: 'flex', alignItems: 'center' }}>
          {publishDate.toLocaleDateString()}
        </Typography>
       
      </CardContent>
    </Card>
    
  )
}

export default VideoCard;