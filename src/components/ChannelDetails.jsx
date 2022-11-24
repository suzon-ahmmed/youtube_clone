import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFormAPI";
import { ChannelCard, Videos } from './';

const ChannelDetails = () => {

    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
    
    const {id} =  useParams();

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data)=> setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data)=> setVideos(data?.items));


    },[id])

  return (
    <Box minHeight="95vh">
        <Box sx={{color: "#fff",}}>
            <div style={{height: "300px", zIndex: 10, background: 'linear-gradient(to right, #ff673c, #ff0305)'}}/>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <ChannelCard  channel={channelDetail} marginTop="-100px"/>
            </Box>
        </Box>
        <Box display='flex' p='2'>
            <Videos videos={videos} />
        </Box>

    </Box>
  )
}

export default ChannelDetails
