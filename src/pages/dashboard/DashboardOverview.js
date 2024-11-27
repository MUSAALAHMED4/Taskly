import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,

} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  AcquisitionWidget,
} from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { verification, totalOrders } from "../../data/charts";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle
            as={Button}
            variant="primary"
            size="sm"
            className="me-2"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />{" "}
              Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview
              Security
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Completed Tasks"
            title="120"
            period="Nov 1 - Nov 27"
            percentage={75}
            icon={faTasks}
            iconColor="shape-success"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Pending Tasks"
            title="35"
            period="Nov 1 - Nov 27"
            percentage={15}
            icon={faRocket}
            iconColor="shape-warning"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Verification rate" data={verification} />
        </Col>
      </Row>

    
      
    </>
  );
};
