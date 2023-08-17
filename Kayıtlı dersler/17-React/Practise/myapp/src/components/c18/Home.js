import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Cards from "./Cards";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://6488f4b70e2469c038fe89f8.mockapi.io/prodouct"
      );
      const data = response.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {loading && <Spinner animation="border" variant="success" />}
      <Row className="g-5 text-center">
        {data.map((item, index) => (
          <Col key={item.id} sm={6} md={4} lg={3} xl={3}>
            <Cards {...item} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
