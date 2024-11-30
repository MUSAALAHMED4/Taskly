import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
  faTasks,
  faUserCheck,
  faUserPlus,
  faChartLine,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Code from "../components/CodeEditor";
import GitHubButton from "react-github-btn";

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/Taskly.png";
import ThemesbergLogo from "../assets/img/Taskly.png";
import Taskly from "../assets/img/Taskly1.png";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/Taskly.png";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import pages from "../data/pages";
import features from "../data/features";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link
          as={Link}
          to={link}
          className="page-preview page-preview-lg scale-up-hover-2"
        >
          <Image
            src={image}
            className="shadow-lg rounded scale"
            alt="Dashboard page preview"
          />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name}{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li
          data-toggle="tooltip"
          data-placement="left"
          title="Main folder that you will be working with"
        >
          <FontAwesomeIcon
            icon={icon ? icon : faFolder}
            className={`${color} me-2`}
          />{" "}
          {name}
        </li>
      </OverlayTrigger>
    );
  };

  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = localStorage.getItem("token");
      setToken(token);
    };
    getToken();
  }, []);

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to="#home"
            className="me-lg-3 d-flex align-items-center"
          >
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Taskly</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">
                  Features
                </Nav.Link>
                <Nav.Link as={HashLink} to="#pages">
                  Pages
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  to="#folder"
                  className="d-sm-none d-xl-inline"
                >
                  Folder Structure
                </Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">
                  Getting Started
                </Nav.Link>
                <Nav.Link as={HashLink} to="#download">
                  Upgrade to Pro
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {token ? (
              <h3 style={{color: "white"}}>user</h3>
            ): (
              <Button
                as={Link}
                to={Routes.Signin.path}  
                variant="outline-white"
                className="ms-3"
              >
                <FontAwesomeIcon icon={faUserCheck} className="me-1" /> Sign In
              </Button>
            )}
            <Button
              as={Link}
              to={Routes.Signup.path}  
              variant="outline-white"
              className="ms-3"
            >
              <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Sign Up
            </Button>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block">
                <span className="fab fa-react"></span>
              </div>
              <h1 className="fw-bolder text-secondary">Taskly</h1>
              <p className="text-muted fw-light mb-5 h5">
                Simplify your daily task management with ease and efficiency
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  variant="secondary"
                  as={Link}
                  to={Routes.Signup.path}
                  className="text-dark me-3"
                >
                  Explore dashboard{" "}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="d-none d-sm-inline ms-1"
                  />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5"></div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg
              className="fill-soft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4"
            >
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faTasks} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">50+</h3>
              <p className="text-gray">Managed Tasks</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="text-secondary"
                />
              </div>
              <h3 className="fw-bolder">100+</h3>
              <p className="text-gray">Active Users</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-secondary"
                />
              </div>
              <h3 className="fw-bolder">Comp.. Reports</h3>
              <p className="text-gray">Performance Analysis</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-secondary"
                />
              </div>
              <h3 className="fw-bolder">High Security</h3>
              <p className="text-gray">For Your Data</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">
                Map Management{" "}
                <Badge
                  pill
                  bg="secondary"
                  text="dark"
                  className="badge-md ms-3 mb-0 fs-6"
                >
                  Pro
                </Badge>
              </h2>
              <p className="mb-3 lead fw-bold">
                Add and display locations easily with interactive maps
              </p>
              <p className="mb-4">
                Taskly provides a powerful map management feature to add custom
                markers and display them interactively using MapBox integration.
              </p>
              <Button
                href="#"
                className="me-3"
                variant="secondary"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" /> View
                Map
              </Button>
              <Button href="#" variant="outline-primary" target="_blank">
                <FontAwesomeIcon icon={faBook} className="me-2" /> User Guide
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="Map integration in Taskly" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">
                Calendar{" "}
                <Badge
                  pill
                  bg="secondary"
                  text="dark"
                  className="badge-md ms-3 mb-0 fs-6"
                >
                  Pro
                </Badge>
              </h2>
              <p className="mb-3 lead fw-bold">
                Advanced calendar for managing events
              </p>
              <p className="mb-4">
                Taskly offers a flexible calendar where you can add, edit, and
                delete events to efficiently manage your tasks.
              </p>
              <Button
                href="#"
                className="me-3"
                variant="secondary"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> View
                Calendar
              </Button>
              <Button href="#" variant="outline-primary" target="_blank">
                <FontAwesomeIcon icon={faBook} className="me-2" /> User Guide
              </Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Taskly calendar preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Bootstrap 5</h2>
              <p className="mb-3 lead fw-bold">Latest version of Bootstrap</p>
              <p className="mb-4">
                Taskly is built using the latest version of Bootstrap 5 and
                leverages Vanilla JavaScript for smooth and reliable
                functionality.
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Design overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-white" id="download">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <h2 className="fw-light mb-3">
                Taskly: Your Task Management Solution
              </h2>
              <p className="lead mb-4 me-lg-6">
                Manage your daily tasks efficiently with Taskly. Choose between
                the Free and Pro versions based on your needs. Check the
                comparison below to select the best option for you.
              </p>
            </Col>
            <Col xs={1} lg={2}>
              <div className="github-big-icon">
                <img src={Taskly} alt="Taskly Logo" className="fa-icon-size" />
              </div>
            </Col>
          </Row>
          <Row className="mt-6">
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">
                      Free Version
                    </h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>50</strong> Task Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>5</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-danger me-2"
                      />{" "}
                      Advanced Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-danger me-2"
                      />{" "}
                      Custom Analytics
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-danger me-2"
                      />{" "}
                      Calendar Integration
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-danger me-2"
                      />{" "}
                      Team Collaboration
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0 pb-0">
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-danger me-2"
                      />{" "}
                      Priority Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Button
                  href="#"
                  target="_blank"
                  variant="primary"
                  className="w-100 m-0 mt-3 mb-3"
                >
                  <FontAwesomeIcon icon={faDownload} className="me-1" />{" "}
                  Download
                </Button>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4 py-5 mt-lg-n5">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">
                      Pro Version
                    </h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>100+</strong> Task Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>10</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>4</strong> Integrated Plugins
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success me-2"
                      />{" "}
                      Advanced Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success me-2"
                      />{" "}
                      Custom Analytics
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success me-2"
                      />{" "}
                      Calendar Integration
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success me-2"
                      />{" "}
                      Team Collaboration
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 border-0 ps-0 pb-0">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success me-2"
                      />{" "}
                      Priority Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Button
                  href="#"
                  target="_blank"
                  variant="secondary"
                  className="w-100 m-0 mt-3"
                >
                  Demo Taskly Pro{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Taskly Dashboard</span>
              </Navbar.Brand>
              <p>
                Taskly is a daily task management application designed to help
                you organize your time and track your progress efficiently.
              </p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank" href="https://themesberg.com/blog">
                    Blog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/products"
                  >
                    Products
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/about"
                  >
                    About Us
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/contact"
                  >
                    Contact Us
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsQuickStart.path}
                    target="_blank"
                  >
                    Getting started
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    as={Link}
                    to={Routes.DocsChangelog.path}
                    target="_blank"
                  >
                    Changelog
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    target="_blank"
                    href="https://themesberg.com/licensing"
                  >
                    License
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                We’ll never share your details. See our{" "}
                <Card.Link className="text-white" href="#">
                  Privacy Policy
                </Card.Link>
              </p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="d-flex justify-content-center"
              ></Card.Link>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0">
                  Copyright © Taskly 2024-
                  <span className="current-year">2024</span>. All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
