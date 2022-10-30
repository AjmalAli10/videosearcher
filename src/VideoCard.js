import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function VideoCard(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.previewImage}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="outline" component="div">
          {props.genre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          ViewCount: {props.viewCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default VideoCard;
