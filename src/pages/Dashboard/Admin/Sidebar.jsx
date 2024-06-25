import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("dietToken");
    navigate("/");
  };

  return (
    <>
      <div className="px-8 py-3">
        <h4 className="">Analytics</h4>

        <NavLink
          className="flex items-center py-2 text-lg hover:text-indigo-700"
          to=""
          end
        >
          {({ isActive }) => (
            <>
              <i className="ai ai-house-line-fill mr-3 text-2xl text-emerald-600"></i>
              Home
              <i className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}></i>
            </>
          )}
        </NavLink>

        <NavLink className="flex items-center py-2 text-lg hover:text-indigo-700" to="users">
          {({ isActive }) => (
            <>
              <i className="ai ai-chart-line-up-fill mr-3 text-2xl text-amber-400"></i>
              Users
              <i className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}></i>
            </>
          )}
        </NavLink>
      </div>

      <div className="px-8 py-3">
        <h4 className="opacity-80 ">Manage</h4>
        <NavLink className={"flex items-center py-2 text-lg hover:text-indigo-700"} to="requests">
          {({ isActive }) => (
            <>
              <i className="ai ai-hands-clapping-fill mr-3 text-2xl text-rose-400"></i> Requests
              <i className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}></i>
            </>
          )}
        </NavLink>
      </div>

      <div className="px-8 py-3">
        <h4 className="opacity-50 ">Other Actions</h4>

        <button className="flex items-center py-2 text-lg hover:text-indigo-700" onClick={logoutHandler}>
          <i className="ai ai-arrow-square-out-fill mr-3 text-2xl text-orange-400"></i> Log Out
        </button>
      </div>
    </>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <nav
      className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 bg-white text-black shadow-lg lg:block w-96 z-50 transition-transform duration-300 ease-in-out`}
    >
      <button className="text-red absolute right-4 top-4 lg:hidden" onClick={onClose}>
        <i className="ai ai-x-bold text-2xl"></i>
      </button>
      <div className="flex items-center p-4 pt-6">
        <img
          className="bg-slate-10 mx-2 h-16 w-16 rounded-full border"
          src="https://static.vecteezy.com/system/resources/previews/019/900/306/non_2x/happy-young-cute-illustration-face-profile-png.png"
          alt="profile"
        />
        <div className="mx-2">
          <h3 className="font-heading text-sm">Welcome,</h3>
          <h3 className="font-paragraph text-xl"> Admin</h3>
        </div>
      </div>
      <hr />
      <Links />
    </nav>
  );
}

export default Sidebar;
