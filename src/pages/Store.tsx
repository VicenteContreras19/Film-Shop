import React from "react";
import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import mockitems from "../data/mockitems.json";

export function Store() {
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
          overflow: "hidden"
        }}
      >
        <video
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
          src="/imgs/THE GREATEST SHOTS IN FILM HISTORY _ Volume 1 [HD].mp4"
          autoPlay
          loop
          muted
        ></video>

      </div>
      <h1  style={{color: 'red'}}>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
