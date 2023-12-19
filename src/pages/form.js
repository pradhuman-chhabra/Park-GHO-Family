import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function teammembers() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Team</h1>
        <Col className="bot-marg" md="12" lg="6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfaIRVZboM1w0LmSZMny66KHfZKvzzNpZWph_SApGo6CFxgzA/viewform?embedded=true"
            width="640"
            height="766"
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
