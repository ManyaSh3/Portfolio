import { Link } from "react-scroll";

const NavLink = ({ title, href }) => {
  return (
    <Link
      to={href.replace("#", "")} // Remove `#` for `react-scroll`
      smooth={true}
      duration={500} // Scroll speed
      offset={-70} // Adjust for navbar height
      className="block py-2 pl-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
