import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	const { id } = useParams();
	useEffect(() => {
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);

		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data.items)
		);
	}, [id]);
	return (
		<Box height="100%">
			<Box>
				<div
					style={{
						background:
						'linear-gradient(180deg, rgba(255, 0, 0, 0.7) 0%, rgba(0, 0, 0, 1) 100%)',
						height: "300px",
						zIndex: 10,
					}}
				/>
				<ChannelCard marginTop={"-120px"} channelDetail={channelDetail}/>
			</Box>
      <Box>
        <Box margin="2em 2em">
          <Videos videos={videos}/>
        </Box>
      </Box>
		</Box>
	);
};

export default ChannelDetail;
