import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { RWebShare } from "react-web-share";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
//import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

export default function BlogsCard({ classes, content }) {
  const currentUrl = window.location.href;
  return (
    // <motion.div
    //     className="animate-margin"
    //     initial={[{ opacity: 0 }]}
    //     whileInView={[{ opacity: 1, marginLeft: 0 }]}
    //     transition={{ duration: 0.5 }}
    //     >
    <Link to={`/blogs/${content._id}`} style={{ textDecoration: "none" }}>
      <Card className={classes.card} style={{ borderRadius: "12px" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${content.blog_image}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <div style={{ marginBottom: "6%" }}>
              <RWebShare
                data={{
                  text: `Blog - ${content.title}`,
                  url: currentUrl,
                  title: `${content.title}`,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <ShareSharpIcon style={{ float: "right", color: "#294d6a" }} />
              </RWebShare>
            </div>
            <Link
              to={`/blogs/${content._id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {content.posted_on}
              </Typography>
              {content.title.length > 30 ? (
                <Typography
                  gutterBottom
                  variant="h5"
                  color="#04385ac9"
                  component="h2"
                  sx={{ fontWeight: "bolder", fontSize: "21px" }}
                >
                  {content.title.slice(0, 27) + "..."}
                </Typography>
              ) : (
                <Typography
                  gutterBottom
                  variant="h5"
                  color="#04385ac9"
                  component="h2"
                  sx={{ fontWeight: "bolder" }}
                >
                  {content.title}
                </Typography>
              )}

              <Typography variant="body2" color="textSecondary" component="p">
                {content.headline}{" "}
                <span style={{ color: "blue" }}>....read more </span>
              </Typography>
            </Link>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            {/* <Avatar src={`${content.author_image}`} alt={content.author_name} /> */}
            {/* <Box ml={2}> */}
            <Typography variant="subtitle2" component="p">
              by{" "}
              <span style={{ color: "var(--color-secondary)" }}>
                {content.author_name}
              </span>{" "}
              | 5min read
            </Typography>
          </Box>
          {/* </Box> */}
        </CardActions>
      </Card>
    </Link>
    // </motion.div>
  );
}
