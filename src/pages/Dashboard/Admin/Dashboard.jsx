import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../Redux/userDetails/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    async function fetchData() {
      console.log("Data fetching in the dashboard starts...!!");
      const data = await fetch("http://localhost:3333/users/allUser");
      const resData = await data.json();
      console.log("Response received", resData);
      dispatch(setUserDetails(resData.data));
      console.log("Action is dispatched in the fetchData function");
    }
    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    // Clean up function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  console.log("Dashboard is run");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main Content */}
      <main className={`container h-full min-h-screen text-black px-2 relative ${isOpen ? "mt-0" : "mt-0 lg:mt-0"}`}>
        {/* Hamburger Icon for small screens */}
        <button
          className="m-2 rounded-md p-2 shadow lg:hidden z-50"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Outlet for nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
