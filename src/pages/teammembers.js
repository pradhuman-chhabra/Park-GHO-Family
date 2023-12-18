import Layout from "@/component/layout";
// import { ImageList, ImageListItem } from "@mui/material";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function teammembers() {
  return (
    <Layout>
      <Container>
        <h1 className="section-heading">Team</h1>

        <ul>
          <li>
            <strong>Manu Sheel Gupta</strong>: (Email:{" "}
            <a href="mailto:manu@seeta.in">manu@seeta.in</a>) - Manu is the
            software architect and full stack engineer in the project. He is
            responsible both operationally and strategically to enable
            sustaining and scaling the project. He is also responsible for
            developing collaborations in the Blockchain eco-system and managing
            the project roadmap, milestones along with the feature spec and code
            freeze timelines.
          </li>
          <br />
          <li>
            <strong>Deepti Gupta</strong>: (Email:{" "}
            <a href="mailto:deepti.kotwal.2011@gmail.com">
              deepti.kotwal.2011@gmail.com
            </a>
            ) - Deepti brings years of experience of developing mobility
            solutions at SAP and is responsible for the UI/UX design, workflows,
            recommending key methods to effectively utilize the strengths of OP,
            IPFS.
          </li>
          <br />
          <li>
            <strong>Vithika Gupta</strong>: (Email:{" "}
            <a href="mailto:aspiringworkapps@gmail.com">
              aspiringworkapps@gmail.com
            </a>
            ) - OP Analytics and Community Tooling Developer
          </li>
          <br />
          <li>
            <strong>Pradhuman Chhabra</strong>: (Email:{" "}
            <a href="mailto:pradhumanchhabra1999@gmail.com">
              pradhumanchhabra1999@gmail.com
            </a>
            ) - Design and develop Web3 tools and platforms
          </li>
          <br />
        </ul>
      </Container>
    </Layout>
  );
}
