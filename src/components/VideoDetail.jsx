import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";
import { Videos } from "./";
import { Link,useNavigate ,useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
	const navigate = useNavigate();
	const isMobile = useMediaQuery('(max-width:600px)');
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
			setVideoDetail(data.items[0])
		);

		fetchFromApi(`search?part=snippet&relatedToVideoId${id}&type=video`).then(
			(data) => setVideos(data.items)
		);
	}, [id]);
	if (!videoDetail?.snippet) return "loadding";

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;
	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box sx={{ width: "100%", positon: "sticky", top: "90px" }}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className="react-player"
						controls
					/>
					<Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
						{title}
					</Typography>
					<Stack
						direction="row"
						justifyContent="space-between"
						sx={{ color: "#fff" }}
						py={1}
						px={2}
					>
						<Box onClick={() => navigate(`/channel/${channelId}`)}>
							{ isMobile ? <Typography variant="subtitle1" color="#fff">
								{channelTitle}
								<CheckCircle
									sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
								/>
							</Typography> 
							:
							<Typography variant="h6" color="#fff">
								{channelTitle}
								<CheckCircle
									sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
								/>
							</Typography>}
						</Box>
						<Stack direction="row" alignItems="center" gap={2}>
							<Typography variant="body1" sx={{ opacity: "0.7" }}>
								{parseInt(viewCount).toLocaleString()} views
							</Typography>
							<Typography variant="body1" sx={{ opacity: "0.7" }}>
								{parseInt(likeCount).toLocaleString()} likes
							</Typography>
						</Stack>
					</Stack>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent="center"
					alignItems="center"
					textAlign="center"
				>
					<Videos videos={videos} direction="column" />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
