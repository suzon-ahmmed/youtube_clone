import { Stack } from '@mui/material';
import { categories } from "../utils/constants";
const SideBar = ({selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row" sx={{overflow: "auto", height:{sx:"auto", md:"95%"},flexDirection:{md:"column"}  }}>
        {categories.map((category)=>(
            <button 
            className='category-btn' 
            onClick={()=>{setSelectedCategory(category.name)}}
            style={{color:"#ffff", background: category.name === selectedCategory && "#fc1503"}} 
            key={category.name}>
                <span style={{marginRight: "10px", color: category.name === selectedCategory ? "#ffff" : "#fc1503"}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar;