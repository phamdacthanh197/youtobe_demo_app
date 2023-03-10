import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
	const { searchTerm } = useParams();
	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setVideos(data.items)
		);
	}, [searchTerm]);

	return (
		<Box
			sx={{
				overflowY: "auto",
				height: "90vh",
				p: 2,
			}}
		>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
				Search result for:{" "}
				<span style={{ color: "#f31503", fontSize: "20px" }}>{searchTerm}</span>{" "}
				video
			</Typography>
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
