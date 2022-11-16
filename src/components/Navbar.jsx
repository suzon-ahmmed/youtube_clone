import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems="center"  
    px={2} py={1} 
    sx={{position: "sticky", top: 0, justifyContent: "space-between"}}>
       <Link to="/">
         <img src={logo} alt="logo" width={40} />
       </Link>
       <SearchBar />
    </Stack>
  )
}

export default Navbar;