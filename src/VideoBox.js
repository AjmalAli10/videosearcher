import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, LinearProgress, Box } from "@mui/material";
import VideoCard from "./VideoCard";

function VideoBox({ searchKey, intSearch }) {
  const [videos, setVideos] = useState([]);
  const [timerId, setTimerId] = useState("");
  const [onLoding, setOnLoading] = useState(false);

  useEffect(() => {
    const newTimerId = setTimeout(() => {
      apiVideo(searchKey);
    }, 500);

    setTimerId(newTimerId);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [searchKey]);

  const apiVideo = async (searchKey) => {
    let url = "";
    if (searchKey === intSearch) {
      url = "https://crio-xflix.herokuapp.com/v1/videos";
    } else {
      url = `https://crio-xflix.herokuapp.com/v1/videos?title=${searchKey}`;
    }
    setOnLoading(true);
    const res = await axios.get(url);
    setOnLoading(false);
    const videos = res.data.videos;
    setVideos([...videos]);
  };

  return (
    <>
      {onLoding ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {videos.length ? (
            videos.map((video) => (
              // console.log(video)
              <Grid item xs={12} sm={6} md={3} key={video.id}>
                <VideoCard {...video} />
              </Grid>
            ))
          ) : (
            <Box id="h4">
              <h4 style={{ color: "#636363" }}>No videos found</h4>
            </Box>
          )}
        </Grid>
      )}
    </>
  );
}
export default VideoBox;
