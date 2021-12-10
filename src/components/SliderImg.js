import axios from "axios";
import React, { useEffect, useState } from "react";
import '../assets/css/slider.css'
export const SliderImg = ({ direction,setLengthData,active }) => {
  const imagesApi = "http://myjson.dit.upm.es/api/bins/7743";
  const [data, setdata] = useState([]);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(imagesApi);
      return resp.data.images;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {}, [active]);

  useEffect(() => {
    sendGetRequest().then((data) => {
      setdata(data);
      setLengthData(data.length)
    });
  }, [setLengthData]);

  return (
    <div className="col-12 p-0">
      {data.length > 0
        ? data.map((img, index) => {
            return (
              <img
                className={`img-slider  ${
                  active === index
                    ? direction === "next"
                      ? "animate__animated animate__fadeInRight  "
                      : direction !== "none" &&
                        "animate__animated animate__fadeInLeft"
                    : direction === "next"
                    ? " d-flex animate__animated animate__fadeOutLeft position-absolute "
                    : direction !== "none"
                    ? " d-flex animate__animated animate__fadeOutRight position-absolute"
                    : "d-none position-absolute"
                }  `}
                key={index}
                src={img.url}
                alt="MDN"
              />
            );
          })
        : "loading"}
    </div>
  );
};
