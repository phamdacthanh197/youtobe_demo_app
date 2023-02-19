import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop, customCard }) => {
	const navigate = useNavigate();
	return (
		<Box sx={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
			width: { md: "320px", xs: "100%", sm: "350px"},
      height: "326px",
			margin: 'auto',
			marginTop: marginTop,
      }}
			className={customCard}
			>
			<Box>
				<CardContent
				onClick={() => navigate(`/channel/${channelDetail?.id?.channelId}`)}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "#fff",
					}}
				>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
						sx={{
							borderRadius: "50%",
							height: "180px",
							width: "180px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>
          <Typography>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <AccountCircleIcon sx={{
                fontSize: 16, color: "grey", ml: "5px"
              }}/>
          </Typography>
					<Typography variant="subtitle2" fontSize={12} color="grey">
					{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() } Subcriber
					</Typography>
				</CardContent>
			</Box>
		</Box>
	);
};

export default ChannelCard;
