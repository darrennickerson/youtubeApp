import axios from "axios";
const KEY = "AIzaSyCCkb2ROMuORx_5pzHRPQj71iBEvA8cpfc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
