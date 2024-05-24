import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Pits</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About us</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Buypits
          </Link>
        </div>

        {/* Desktop Navbar */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Fitness</summary>
                <ul className="">
                  <li>
                    <a>Activewear</a>
                  </li>
                  <li>
                    <a>Gear</a>
                  </li>
                  <li>
                    <a>Apparel</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Nutrition</summary>
                <ul className="">
                  <li>
                    <a>Weight Management</a>
                  </li>
                  <li>
                    <a>Nutrition Facts</a>
                  </li>
                  <li>
                    <a>Meal Plans</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Tools</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
