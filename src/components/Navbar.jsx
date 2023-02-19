import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<Stack
			backgroundColor="rgba(255,0,0,0.7)"
			direction="row"
			alignItems="center"
			p={2}
			sx={{
				position: "sticky",
				top: 0,
				justifyContent: "space-between",
			}}
		>
      <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='logo' style={{height: '45px'}}/>
      </Link>
      <SearchBar />
    </Stack>
	);
};

export default Navbar;
