import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import sublinks from './data';

// const { links } = sublinks;
// console.log(page, links);

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  sublinks.map(link => {
    const { links } = link;
  });

  const openMenu = () => {
    setMenuOpened(!menuOpened);

    if (menuOpened) {
      sublinks.map(link => {
        const { links } = link;
        links.map(link => {
          const { label, icon, url } = link;
          // console.log(label, icon, url);

          return (
            <p className="links">
              <Link to={url}>
                {icon}
                {label}
              </Link>
            </p>
          );
        });
      });
    }
  };

  return (
    <nav>
      <ul className="menu">
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          // console.log(links);
          return (
            <button className="menu-item" key={index} onClick={openMenu}>
              {page}
            </button>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
