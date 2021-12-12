import axios from "axios";

const dogfishAPI = axios.create({
    baseURL: "https://pf.dogfish.cz/api/",
});

export default dogfishAPI;
