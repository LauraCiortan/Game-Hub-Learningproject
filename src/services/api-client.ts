import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba536bf4cf1e43c6a14833650f0fda14",
  },
});
