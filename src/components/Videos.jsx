import React from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos , direction}) => {
  if(!videos?.length) return " loading...."

	return (
		<Stack direction={direction || "row"} flexWrap="wrap" gap={3}
      sx={{
        justifyContent: "center",
      }}
      alignItems={direction && "center"}
    >
			{videos.map((item, index) => (
				<Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard customCard={'custom-card'} channelDetail={item} />}
        </Box>
			))}
		</Stack>
	);
};

export default Videos;
