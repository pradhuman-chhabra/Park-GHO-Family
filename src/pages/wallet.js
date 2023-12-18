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
        <h1 className="section-heading">Vision</h1>

        <Row>
          <Col className="bot-marg" md="12" lg="6">
            <img src="/img/Mask group.png" style={{ width: "100%" }} />
          </Col>
          <Col className="bot-marg" md="12" lg="6">
            <h5>
              Our vision is to use blockchain technology to make driving safer
              and monitored for drivers, authorities, as well as other 3rd
              parties. With a mix of hardware and software powered by Ethereum
              blockchain services and IPFS/Filecoin decentralized storage, we
              will provide intelligent feedback about drive quality and help
              analyze past incidents, as well as predict future incidents
            </h5>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
