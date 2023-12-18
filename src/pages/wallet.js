import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

export default function vision() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading"></h1>

        <Col className="bot-marg" md="12" lg="12">
          <img
            src="/img/wallethero.png"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Col>
      </Container>

      <Container>
        <h1 className="section-heading">What is Miles wallet?</h1>

        <Col className="bot-marg" md="12" lg="12">
          <img
            src="/img/featuresofwallet.png"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Col>
        <h1 className="section-heading">
          We’re making crypto easy and convenient to use at last
        </h1>
      </Container>

      <Container>
        <h1 className="section-heading">Target Audience</h1>

        <Col className="bot-marg" md="12" lg="12">
          <img
            src="/img/mileswallettargetaudience.png"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Col>
        <h1 className="section-heading">What We Solve</h1>
        <Col className="bot-marg" md="12" lg="12">
          <img
            src="/img/Copy of Mileswallet-investor-deck.pdf (1).png"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Col>
        <h1 className="section-heading">Business Model: How Our Ecosystem is Monetized?</h1>
        <Col className="bot-marg" md="12" lg="12">
          <img
            src="/img/Copy of Mileswallet-investor-deck 3.png"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Col>
      </Container>

      <Container></Container>
    </Layout>
  );
}
