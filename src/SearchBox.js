import { Box, TextField, Typography } from "@mui/material";

function SearchBox({ searchKey, handleInputChange }) {
  return (
    <Box className="header" sx={{ mb: 2 }}>
      <Box sx={{ pr: 2 }}>
        <Typography variant="h5">Video Search</Typography>
      </Box>
      <Box>
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchKey}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
}
export default SearchBox;
