import { useContext } from "react";
import { FaChartBar, FaClock, FaHome } from "react-icons/fa"
import { Link, NavLink } from "react-router"


const Navbar = () => {
  
   const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 bg-[#244D3F] font-semibold p-2 rounded-md text-white"
      : "flex items-center gap-2";
  return (
    <div className="flex justify-between p-4 shadow">
      <Link to="/"><span className="font-bold text-xl">KeenKeeper</span></Link>
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