import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "767e902a976145a388375dbf0b88b961",
  },
});
