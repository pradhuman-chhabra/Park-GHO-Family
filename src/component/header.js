import styles from "@/styles/header.module.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import LaunchIcon from "@mui/icons-material/Launch";
import { Margin } from "@mui/icons-material";

export default function Header() {
  const { asPath } = useRouter();
  // console.log(asPath);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      height="100"
      className={styles.header}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/img/Park Navbar Logo.png"
            height="60"
            width="60"
            alt="Park Token"
            style={{ marginRight: "15px" }}
          />
          <strong>Park Plus Token (PPT)</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.responsiveButton}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav placement="end" activeKey={asPath} className={styles.nav}>
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/vision">Architechture</Nav.Link> */}
            <Nav.Link href="/platform">Impact</Nav.Link>
            <Nav.Link href="/wallet">Miles Wallet</Nav.Link>
            {/* <Nav.Link href="/workflow">Traffic Management System</Nav.Link> */}
            <Nav.Link href="/team">Team</Nav.Link>
            {/* <Nav.Link href="/testimonials">Notable Achievements </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
