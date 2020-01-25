import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Carousel from "../../components/Carousel";

function NoMatch() {
  return (
    <Container fluid>
        <Row>
            <h2>All My Projects</h2>
        </Row>
      <Row>
        <Col size="md-12">
          
           <Carousel />
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
