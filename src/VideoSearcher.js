import React, { useState } from "react";
import { Box } from "@mui/material";
import VideoBox from "./VideoBox";
import SearchBox from "./SearchBox";

function VideoSearcher() {
  const intSearch = "";
  const [searchKey, setSearchKey] = useState(intSearch);

  const handleInputChange = (e) => {
    const search = e.target.value;
    console.log(search);
    setSearchKey(search);
  };
  return (
    <Box>
      <SearchBox searchKey={searchKey} handleInputChange={handleInputChange} />
      <VideoBox searchKey={searchKey} intSearch={intSearch} />
    </Box>
  );
}
export default VideoSearcher;
