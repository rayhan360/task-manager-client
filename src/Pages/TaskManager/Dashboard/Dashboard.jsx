import { useContext, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className={`flex flex-col lg:flex-row h-screen`}>
      <button
          onClick={toggleNav}
          className="lg:hidden bg-[#F6F6F6] p-2 text-xl"
        >
          {isNavOpen ? "Close" : "Open"} Menu
        </button>
        <div className={`w-full lg:w-64 min-h-screen bg-[#F6F6F6] p-4 ${isNavOpen ? "" : "hidden lg:block"}`}>
          <div className="mb-8">
            <div className="items-center mb-4">
              <div className="flex justify-center">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-full size-20"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">
                  {user?.displayName}
                </p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard/personal" className="">
                Personal Tasks
              </NavLink>
            </li>
            <li>
              <Link to="/dashboard/today" className="">
                Todays Tasks
              </Link>
            </li>
            <li>
              <Link to="/dashboard/important" className="">
                Important Tasks
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          {/* <button className="mt-8 bg-[#4daeef] text-white py-2 px-4 rounded-md text-center">
          Logout
        </button> */}
        </div>

        <div className="flex-1 p-8 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
