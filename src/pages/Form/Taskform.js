
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import TaskTable from '../tables/TaskTable'; 


export const Taskform = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
    <Card.Body>
      <h5 className="mb-4">Add New Task</h5>
      <Form>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="taskTitle">
              <Form.Label>Task Title</Form.Label>
              <Form.Control required type="text" placeholder="Enter the task title" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="taskCategory">
              <Form.Label>Task Category</Form.Label>
              <Form.Select required>
                <option value="0">Select category</option>
                <option value="1">Work</option>
                <option value="2">Personal</option>
                <option value="3">Urgent</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="startDate">
              <Form.Label>Start Date</Form.Label>
              <Datetime
                timeFormat={false}
                renderInput={(props, openCalendar) => (
                  <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="MM/DD/YYYY"
                      onFocus={openCalendar}
                    />
                  </InputGroup>
                )}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="dueDate">
              <Form.Label>Due Date</Form.Label>
              <Datetime
                timeFormat={false}
                renderInput={(props, openCalendar) => (
                  <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="MM/DD/YYYY"
                      onFocus={openCalendar}
                    />
                  </InputGroup>
                )}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Select required>
                <option value="0">Select priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="taskStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select required>
                <option value="0">Select status</option>
                <option value="1">Not Started</option>
                <option value="2">In Progress</option>
                <option value="3">Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="taskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter a detailed description of the task" />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3">
          <Button variant="primary" type="submit">Save Task</Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
  );
};
