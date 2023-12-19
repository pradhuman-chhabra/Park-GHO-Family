import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function teammembers() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Sign-Up & Referral</h1>
        <Col className="bot-marg" md="12" lg="12">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfaIRVZboM1w0LmSZMny66KHfZKvzzNpZWph_SApGo6CFxgzA/viewform?embedded=true"
            width="640"
            height="3243"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Col>
      </Container>
    </Layout>
  );
}
