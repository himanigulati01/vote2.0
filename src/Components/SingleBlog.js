import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import getSingleBlogApi from "../requests/getSingleBlogApi";
import SinglePost from "../GenericComponent/SingleBlogPost";
import { Container } from "react-bootstrap";

export default function Single() {
  const [blogItem, setBlogItem] = useState();
  const params = useParams();
  useEffect(() => {
    getSingleBlogApi(params.id, setBlogItem);
  }, []);
  return (
    <Container>
      <div className="single">
        <SinglePost blogDetails={blogItem} />
      </div>
    </Container>
  );
}
