import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown} from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";
import { Taskform } from "../Form/Taskform";
import TaskTable from "../tables/TaskTable";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
 


 


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
     <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
     <Button variant="secondary" className="text-dark me-2"   >
      <FontAwesomeIcon icon={faPlus} className="me-2" />
      <span>New Task</span>
    </Button>
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
              <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> -----
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faStore} className="me-2" /> -------
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCartArrowDown} className="me-2" />-----
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faChartPie} className="me-2" /> ------
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>


        <Row>
         
            <Col xs={12} xl={12}>
            <TaskTable />
            <Taskform />
            </Col>
        </Row>
    </>
  );
};
