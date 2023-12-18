import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

export default function vision() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Miles Wallet</h1>

        <Col className="bot-marg" md="12" lg="12">
          <img src="/img/wallethero.png" style={{ width: "100%" }} />
        </Col>
      </Container>
    </Layout>
  );
}
