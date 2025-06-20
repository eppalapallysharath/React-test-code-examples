import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(url).then((data) => setData(data.data));
  }, []);
  return data;
};

export default useFetch;
