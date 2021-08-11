import axios from "axios";
import React, { Component } from "react";

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      todo: {},
    };
  }

  handleChange = ({ target: { name, value } }) => {
    if (this.state.todo) {
      let todo = this.state.todo;
      todo[name] = value;
      this.setState({ todo });
    }
  };

  handleSubmit = () => {
    axios
      .put(`/api/todo/update/${this.state.id}`, { ...this.state.todo })
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    axios
      .get(`/api/todo/${this.state.id}`)
      .then((res) => {
        let todo = res.data.todo;
        this.setState({ todo });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let { date, status, title, description } = this.state.todo;
    let statusVal = ["Next Up", "InProgress", "Completed"];
    return (
      <section className="main-section">
        <div className="createTodo">
          <h2 className="text-center pt-5">Update Todo</h2>
          <div className="form border px-4 py-5 rounded shadow-sm">
            <label htmlFor="" className="form-label">
              Todo title
            </label>
            <input
              className="form-control"
              required
              type="text"
              name="title"
              value={title || ""}
              onChange={this.handleChange}
            />
            <label className="form-label" htmlFor="">
              Todo description
            </label>
            <input
              className="form-control"
              required
              type="text"
              name="description"
              value={description || ""}
              onChange={this.handleChange}
            />
            <label htmlFor="" className="form-label">
              Select todo status
            </label>
            <select
              className="form-control"
              name="status"
              value={status || ""}
              onChange={this.handleChange}
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
              value={date || ""}
              name="date"
              required
              onChange={this.handleChange}
            />
            <input
              className="form-control submit-btn"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </section>
    );
  }
}
