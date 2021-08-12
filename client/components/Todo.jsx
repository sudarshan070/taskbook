import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";

export default function Todo(props) {
  const [todos, setTodos] = useState([]);
  const [err, setErr] = useState([]);

  useEffect(() => {
    axios
      .get("/api/todo")
      .then((res) => setTodos(res.data.todo))
      .catch((error) => setErr(error));
  }, []);

  const handleDelete = (id) => {
    try {
      const todo = todos.filter((todo) => todo._id != id);
      setTodos(todo);
       axios.delete(`/api/todo/delete/${id}`);
    } catch (error) {
      Next(error);
    }
  };

  return (
    <section className="main-section p-4">
      <div className="createTodo">
        <h2>Daily Task</h2>
        <p>
          Click <span>New Todo</span> To create a new todo.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-between pt-3">
        {todos.length === 0 ? (
          <div
            style={{
              width: "100%",
              height: "50vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <NavLink
              to="/create"
              className="rounded p-3"
              style={{ background: "#F2F5F6" }}
            >
              Add todays Task
            </NavLink>
          </div>
        ) : todos ? (
          todos.map((singleTodo, i) => {
            let date = singleTodo.date;
            let newDate = date.substr(0, 10);
            return (
              <div key={i} className="card mb-3" style={{ width: "32%" }}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{singleTodo.title}</h5>
                    <div className="d-flex">
                      <NavLink
                        style={{ marginRight: "8px" }}
                        to={`/api/todo/update/${singleTodo._id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
                          ></path>
                        </svg>
                      </NavLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        onClick={() => handleDelete(singleTodo._id)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="card-text">{singleTodo.description}</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between pt-2 ">
                      <span className="date"> {newDate}</span>
                      {singleTodo.status === "Next Up" ? (
                        <span className="red rounded">{singleTodo.status}</span>
                      ) : singleTodo.status === "InProgress" ? (
                        <span className="yellow rounded">
                          {singleTodo.status}
                        </span>
                      ) : (
                        <span className="green rounded">
                          {singleTodo.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </div>
    </section>
  );
}
