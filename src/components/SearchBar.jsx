// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper component="form" sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 0 } }}>
      <input className="search-bar" placeholder="search..." 
      value="" 
      onClick={()=>{}} />
      <IconButton type="submit" sx={{p:1, color: "red", }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar