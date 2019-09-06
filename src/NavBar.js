import React from "react";

import "./NavBar.css";

const links = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/brasileirao",
    text: "Brasilerão 2019"
  },
  {
    to: "/ao-vivo",
    text: "Espanha X Suíca AO VIVO"
  }
];

const NavBar = () => {
  const [open, setOpen] = React.useState();
  return (
    <nav className="nav-bar">
      <div className="nav-small">
        <button
          className="nav-small__button"
          onClick={() => setOpen(o => !o)}
          style={{
            borderBottom: `1px solid ${open ? "#fff" : "transparent"}`
          }}
        >
          MENU
        </button>
        <div
          className="nav-small__links"
          style={{ display: open ? "block" : "none" }}
        >
          {links.map(l => (
            <a key={l.to} href={l.to} className="nav-link">
              {l.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
