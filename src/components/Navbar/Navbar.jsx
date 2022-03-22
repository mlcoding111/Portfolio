import React from "react";

export default function NavBar() {

  const [toggled, setToggled] = React.useState(false);
  const primaryNav = document.querySelector('.primary-navigation');
  const navToggle = document.querySelector('.mobile-nav-toggle');

  React.useEffect(() => {

    const onScroll = (e) => {
      let scrollValue = e.target.documentElement.scrollTop;
      if (scrollValue > 100) {
        // document.documentElement.style.setProperty('--navbar-clr', '#0561f5');
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  // Handle mobile nav behaviors
  const toggleOpen = () => {
      const visibility = primaryNav.getAttribute('data-visible');

      if(visibility === "false"){
        primaryNav.setAttribute('data-visible', "true")
      }else{
        primaryNav.setAttribute('data-visible', "false")
      }
  };

  return (
    <>
    {/* Aria controls mean this button is controling the "primary-navigation" content */}
    <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={toggleOpen}>
      <span className="sr-only">Menu</span>
    </button>
      <nav>          
        <ul id="primary-navigation" data-visible="false" className="primary-navigation flex">
          <li className="active">
            <a href="">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className="active">
            <a href="">
              <span aria-hidden="true">00</span>About
            </a>
          </li>
          <li className="active">
            <a href="">
              <span aria-hidden="true">00</span>Works
            </a>
          </li>
          <li className="active">
            <a href="">
              <span aria-hidden="true">00</span>Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Scrolled nav */}
    </>
  );
}
