import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/component/layout";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <>
        {/* Near Transport Intel */}
        <Container>
          <Col className="bot-marg" md="12" lg="12">
            <h1 className="section-heading">Distribution Partners</h1>
            <img
              src="/img/4.png"
              style={{ width: "100%", borderRadius: "20px" }}
            />
            <h1 className="section-heading">Hardware Partners</h1>
            <img
              src="/img/2.png"
              style={{ width: "100%", borderRadius: "20px" }}
            />
            <h1 className="section-heading">Software Partners</h1>
            <img
              src="/img/3.png"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </Col>
          <Col className="bot-marg" md="12" lg="12">
            <h1 className="section-heading">Achivements</h1>
            <ul>
              <li>
                Consensys Prize at NAVH 2023 using Infura, Metamask SDK, Web3
                tools
              </li>
              <li>
                Microgrant Recipient 2023 for using Filecoin & IPFS, Optimism,
                Ethereum
              </li>
              <li>Challenge Winner at Encode's Next Video Build Hackathon</li>
              <li>
                Top 20 Public Goods Innovation by Niti Aayog team at a Mobility
                Summit in Vigyan Bhawan, New Delhi
              </li>
              <li>
                Application distribution network of project modules at Apple,
                Google, Amazon, and Samsung with enablement of blockchain
                transactions
              </li>
              <li>
                Connected vehicles for efficiency and sustainability at ZF
                Mobility, Switzerland. ZF Mobility also shared a dataset with us
                on their fleets: 15000 trips, 45+ trucks, and 175+ drivers.
              </li>
            </ul>
          </Col>
        </Container>
      </>
    </Layout>
  );
}
