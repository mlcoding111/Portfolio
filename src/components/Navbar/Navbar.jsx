import React from "react";

export default function NavBar() {

  const [toggled, setToggled] = React.useState(false);

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


  };

  return (
    <>
    {/* Aria controls mean this button is controling the "primary-navigation" content */}
    <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
      <span className="sr-only">Menu</span>
    </button>
      <nav>          
        <ul id="primary-navigation" className="primary-navigation flex">
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
