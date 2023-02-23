import React from 'react';
import { Stack } from "@mui/material";
import { categories } from "../utils/constants"

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#FFFF00',
            color: category.name === selectedCategory ? "#000000" : "#FFFDFD"
          }}
          key={category.name}
        >
          <span style={{
            color: category.name === selectedCategory ? "black" : "yellow",
            marginRight: "13px",
          }}>{category.icon}</span>
          <span style={{
            opacity: category.name === selectedCategory ? 1 : 0.7
          }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar