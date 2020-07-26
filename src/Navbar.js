import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/tags">Tags</NavLink>
      </li>
    </ul>
  );
}
