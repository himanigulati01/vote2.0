import React from "react";
import { useState, useEffect } from "react";
import getAllBlogsApi from "../requests/getAllBlogsApi";
import BlogsContent from "../GenericComponent/BlogContent";
import BlogHeader from "../GenericComponent/BlogHeader";
import Loader from "../GenericComponent/Loader";
function Blogs() {
  const [blogItems, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getAllBlogsApi(setBlogs, setLoader);
  }, []);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <BlogsContent blogs={blogItems} />
        </>
      )}
    </div>
  );
}

export default Blogs;
