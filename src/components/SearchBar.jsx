import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate =  useNavigate();

  const handelSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');

    }
  }
  return (
    <Paper component="form" onSubmit={handelSubmit} sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 0 } }}>
      <input className="search-bar" placeholder="search..." 
      value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
       />
      <IconButton type="submit" sx={{p:'5px', color: "red", }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar