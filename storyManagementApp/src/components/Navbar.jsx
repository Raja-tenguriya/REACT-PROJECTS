import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 place-content-envely w-[100vw]">
      <NavLink to="/">
        Homepage
      </NavLink>

      <NavLink to="/pastes">
        Datalist 
      </NavLink>
    </div>
  )
}
export default Navbar

