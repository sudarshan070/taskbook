import axios from "axios";
import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Next Up");
  const statusVal = ["Next Up", "InProgress", "Completed"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { date, title, description, status };
    await axios
      .post("/api/todo/create", todo)
      .then((res) => props.history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <section className="main-section">
      <div className="createTodo">
        <h2 className="text-center pt-5">Create new Todo</h2>
        <div className="form border px-4 py-5 rounded shadow-sm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className="form-label">
              Todo title
            </label>
            <input
              className="form-control"
              required
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="form-label" htmlFor="">
              Todo description
            </label>
            <input
              className="form-control"
              required
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="" className="form-label">
              Select todo status
            </label>
            <select
              className="form-control"
              value={status}
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              {statusVal.map((status, i) => {
                return (
                  <option key={i} title="Status">
                    {status}
                  </option>
                );
              })}
            </select>
            <label htmlFor="" className="form-label">
              Date
            </label>
            <input
              className="form-control"
              type="date"
              value={date}
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="form-control submit-btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
