import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/images/logo2.png";

export default function Aside() {
  return (
    <aside className="aside d-flex align-items-center flex-column justify-content-between">
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <NavLink className="btn newTodo" to="/create">
        Add New Todo
      </NavLink>
    </aside>
  );
}
