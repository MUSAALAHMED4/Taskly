import React, { useState } from "react";
import { Table, Button ,Card } from "react-bootstrap";

const TaskTable = () => {
  // Example data state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      category: "Work",
      startDate: "11/01/2024",
      dueDate: "11/05/2024",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Task 2",
      category: "Personal",
      startDate: "11/02/2024",
      dueDate: "11/10/2024",
      priority: "Medium",
      status: "Not Started",
    },
    {
      id: 3,
      title: "Task 3",
      category: "Personal",
      startDate: "11/02/2024",
      dueDate: "11/10/2024",
      priority: "Medium",
      status: "Not Started",
    },
  ]);

  return (
    // Table with tasks data
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Task Table</h5>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Task Title</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.category}</td>
                  <td>{task.startDate}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => alert(`Edit task ${task.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        setTasks(tasks.filter((t) => t.id !== task.id))
                      }
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskTable;
