import axios from "axios";

export default function getAllBlogsApi(setBlogs, setLoader) {
  axios
    .get("https://bk.techvantoacademy.com/blogs")
    .then((res) => {
      setBlogs(res.data);
      setLoader(false);
    })
    .catch((error) => {
      if (error.response) {
        //setApiError(true);
        //console.log(err.response.data.message);
        setLoader(false);
        return error.response.data.message;
      } else if (error.request) {
        setLoader(false);
        //setApiError(true);
      } else {
        //setApiError(true);
        setLoader(false);
      }
    });
}
