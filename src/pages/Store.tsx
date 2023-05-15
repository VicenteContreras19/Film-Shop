import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useQuery } from "react-query";
import ClipLoader from 'react-spinners/ClipLoader'
import axios from "axios";

interface Response {
  data: {
    id: number;
    attributes: {
      name: string;
      price: number;
      images: {
        data: {
          attributes: {
            url: string;
          };
        }[];
        length: number;
      };
    };
  }[];
}

export function Store() {
  const { isLoading, isFetching, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () =>
      axios
        .get<Response>(
          import.meta.env.VITE_API_URL + "/api/films?populate=images"
        )
        .then((res) => res),
  });

  data && console.log(data.data);
  if(isLoading){

    return (
      <div style={{
        height: '100vh'
      }} className="text-center d-flex align-items-center justify-content-center">
        <ClipLoader size={200}/>)
    </div>
    )
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <video
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src="/imgs/THE GREATEST SHOTS IN FILM HISTORY _ Volume 1 [HD].mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <h1 style={{ color: "white" }}></h1>
      <Row md={2} xs={1} lg={3} className="g-3 ">
        {data?.data.data.map((item) => (
          <Col className="mb-4 mt-0" key={item.id}>
            <StoreItem
              name={item.attributes.name}
              price={item.attributes.price}
              key={item.id}
              id={item.id}
              imgUrl={
                import.meta.env.VITE_API_URL +
                item.attributes.images.data[0].attributes.url
              }
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
