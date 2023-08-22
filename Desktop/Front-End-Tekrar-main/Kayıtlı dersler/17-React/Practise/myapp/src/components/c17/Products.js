import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductCards from "./ProductCards";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = () => {
      const timer = setTimeout(() => {
        fetch("https://6488f4b70e2469c038fe89f8.mockapi.io/prodouct")
          .then((resp) => resp.json())
          .then((data) => {
            setProduct(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    };

    getProduct();
  }, []);

  return (
    <Container className="mt-5">
      {loading && <Spinner animation="border" variant="warning" />}
      <Row className="g-4">
        {product.map((item) => (
          <Col key={item.id} sem={6} md={4} lg={3} xl={2}>
            <ProductCards {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
