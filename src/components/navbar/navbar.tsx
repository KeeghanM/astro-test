import { useState } from 'react';

export default function Navbar() {
    const links = [
        {
            title: "Home",
            URL: "/"
        },
        {
            title: "About",
            URL: "/about"
        },
        {
            title: "Contact",
            URL: "/contact"
        }
    ]

    const [currentLink, setCurrentLink] = useState(links[0].title);
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {links.map((link, index) => (
          <li key={index} className="navbar__link" onClick={() => setCurrentLink(link.title)}>
            <a style={{
                color: currentLink === link.title ? "blue" : "black",
                textDecoration: currentLink === link.title ? "underline" : "none"
            }} className="navbar__link-text" >{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}