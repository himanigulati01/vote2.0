import axios from "axios";

export default function getSingleBlogApi(id, setBlogItem) {
  axios
    .get(`https://bk.techvantoacademy.com/blogs/${id}`)
    .then((res) => {
      setBlogItem(res.data[0]);
    })
    .catch((error) => {
      if (error) {
        ////setApiError(true);
      } else if (error.request) {
        //setApiError(true);
        //setLoader(false);
      } else {
        //setApiError(true);
        //setLoader(false);
      }
    });
}
