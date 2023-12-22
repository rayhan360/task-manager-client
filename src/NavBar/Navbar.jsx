import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import "./Navbar.css"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className="bg-[#4daeef]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center font-bold text-lg">
          <h1 className="text-white">Task Manager</h1>
        </div>
        <div className="">
          <div
            className="lg:hidden text-2xl mr-8 mt-5 text-black"
            onClick={() => setOpen(!open)}
          >
            {open === true ? (
              <AiOutlineClose></AiOutlineClose>
            ) : (
              <AiOutlineMenu></AiOutlineMenu>
            )}
          </div>
          <div>
            <nav
              className={`absolute bg-[#4daeef] z-50 lg:bg-transparent lg:block lg:static px-5 ${
                open ? "right-1" : "-right-72"
              } ${open ? "block" : "hidden"}`}
            >
              <div className="flex flex-col md:flex-row gap-5 py-3 items-center">
                <ul className={`flex flex-col md:flex-row gap-5 text-white`}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutUs">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/community">Community</NavLink>
                  </li>
                  <li>
                    <NavLink to="/knowledge">KnowledgeBase</NavLink>
                  </li>
                </ul>
                <div>
                  {user ? (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between">{user.displayName}</a>
                        </li>
                        <li>
                          <button
                            onClick={logOut}
                            className="bg-[#4daeef] text-white px-5 py-2 rounded-md ml-3 hover:border hover:border-[#4daeef] "
                            type="button"
                            data-ripple-light="true"
                          >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="mb-5 md:mb-0">
                      <Link to="/login">
                        <button
                          className="border text-white border-[#bed1de] px-5 py-2 rounded-md"
                          type="button"
                          data-ripple-light="true"
                        >
                          Sign In
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
