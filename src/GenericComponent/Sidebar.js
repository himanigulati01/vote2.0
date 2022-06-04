import { Link } from "react-router-dom";
import "./sidebar.css";
import Typography from "@mui/material/Typography";
import React from "react";
export default function Sidebar({ sideBarDetail }) {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          <Typography
            variant="h5"
            style={{ fontWeight: 800, color: "#3e77a7" }}
          >
            About Author
          </Typography>
        </span>
        {sideBarDetail && <img src={`${sideBarDetail.author_image}`} alt="" />}
        <p>{sideBarDetail && sideBarDetail.author_detail}</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle" style={{ borderTop: "1px solid black" }}>
          <Typography
            variant="h6"
            style={{ color: "#3e77a7", fontWeight: 800 }}
          >
            CATEGORIES
          </Typography>
        </span>
        <ul className="sidebarList">
          {sideBarDetail?.categories.map((data, index) => (
            <li className="sidebarListItem" key={index}>
              <Link className="link" to="#">
                {data}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </div>
  );
}
