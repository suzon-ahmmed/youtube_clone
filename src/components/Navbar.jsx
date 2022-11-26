import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center"  
    px={2} py={1} 
    sx={{position: "sticky", top: 0, justifyContent: "space-between", background: '#000'}}>
       <Link to="/">
        <Box component="div" sx={{display:"flex", alignItems:"center"}}>
          <img src={logo} alt="logo" width={40} /> 
          <Typography variant='h5' fontStyle="bold" sx={{color:"#fff", letterSpacing: 0, marginLeft: '10px', fontWeight: 'bold', display: {xs: 'none', sm: 'block'}}}>
          YouTube 
          </Typography>
        </Box>
         
       </Link>
       <SearchBar />
    </Stack>
  )
}

export default Navbar;