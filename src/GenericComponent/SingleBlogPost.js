import * as React from "react";
import Sidebar from "./Sidebar";
import "./singlePost.css";
import Typography from "@mui/material/Typography";
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import Popover from "@mui/material/Popover";
import { RWebShare } from "react-web-share";

export default function SinglePost({ blogDetails }) {
  const currentUrl = window.location.href;
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {/* <h1 className="singlePostTitle">
            {blogDetails && blogDetails.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1> */}
          <div className="singlePostInfo">
            <span>
              {/* Author: */}
              <b className="singlePostAuthor">
                <span className="link">
                  {/* {blogDetails && blogDetails.author_name} */}
                  <div style={{ display: "flex" }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      color="black"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {blogDetails && blogDetails.title}

                      <RWebShare
                        data={{
                          text: `Blog - ${blogDetails && blogDetails.title}`,
                          url: currentUrl,
                          title: `${blogDetails && blogDetails.title}`,
                        }}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <ShareSharpIcon
                          sx={{
                            marginLeft: "23px",
                            marginTop: "-15%",
                            color: "#294d6a",
                          }}
                        />
                      </RWebShare>
                      {/* <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <Typography>
                          <div className="share-btn-container" style={{width:'200px',height:'20px'}}>
                     <a href="https://www.facebook.com/sharer.php?u=[post-url]" class="facebook">
                      <i className='fab fa-facebook'></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div></Typography> 
                      </Popover> */}
                    </Typography>
                  </div>

                  <span className="date">
                    {blogDetails && blogDetails.posted_on} . 5min read{" "}
                  </span>
                </span>
                <br />
                {blogDetails && blogDetails.author_name}
              </b>
            </span>
          </div>
          <p className="singlePostDesc">
            {blogDetails &&
              blogDetails.description.map((data) => (
                <>
                  <h3>{data.title}</h3>
                  <p style={{ textAlign: "justify" }}>{data.detail}</p>
                </>
              ))}
          </p>
        </div>
        <Sidebar sideBarDetail={blogDetails} />
      </div>
    </>
  );
}
