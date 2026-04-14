import { FaChartBar, FaClock, FaHome } from "react-icons/fa"
import { NavLink } from "react-router"

const Navbar = () => {
   const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 bg-[#244D3F] font-semibold p-2 rounded-md text-white"
      : "flex items-center gap-2";
  return (
    <div className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">KeenKeeper</h1>
      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/timeline" className={linkClass}>
          <FaClock /> Timeline
        </NavLink>
        <NavLink to="/stats" className={linkClass}>
          <FaChartBar /> Stats
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar