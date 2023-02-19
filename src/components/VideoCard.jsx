import React from "react";
import { Stack, CardContent, CardMedia, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
	demoVideoUrl,
	demoVideoTitle,
	demoChannelTitle,
	demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card className="custom-card" sx={{
      width: { md: "326px", xs: "350px", sm: "350px"},
    }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia 
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url} 
          sx={{
            width: "100%", height: 180
          }}
        />
			</Link>
      <CardContent
          sx={{
            background: "#1e1e1e",
            height: "106px",
          }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1"
              fontSize= " bold "
              color= "#fff"
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2"
              fontSize= " bold "
              color= "grey"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{
                fontSize: 12, color: "grey", ml: "5px"
              }} />
            </Typography>
          </Link>
        </CardContent>
		</Card>
	);
};

export default VideoCard;
