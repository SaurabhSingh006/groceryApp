import { BiHome, BiSolidHome } from "react-icons/bi";
import { TbCategory, TbCategoryFilled } from "react-icons/tb";
import { FaRegListAlt, FaListAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md"
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-4 place-content-center p-4 absolute bottom-0 w-full drop-shadow-2xl bg-white">
      <Link to="/home">
        {pathname === "/home" ? (
          <BiSolidHome className="text-2xl text-greenHome1 m-auto" />
        ) : (
          <BiHome className="text-2xl m-auto" style={{ fontWeight: "500" }} />
        )}
      </Link>

      <Link to="/home/category">
        {pathname === "/home/category" ? (
          <TbCategoryFilled className="text-2xl text-greenHome1 m-auto" />
        ) : (
          <TbCategory className="text-2xl m-auto" />
        )}
      </Link>

      <Link to="/home/order">
        {pathname === "/home/order" ? (
          <FaListAlt className="text-2xl text-greenHome1 m-auto" />
        ) : (
          <FaRegListAlt className="text-2xl m-auto" />
        )}
      </Link>

      <Link to="/home/account">
        {pathname === "/home/account" ? (
          <BsFillPersonFill className="text-2xl text-greenHome1 m-auto" />
        ) : (
          <MdPersonOutline className="text-2xl m-auto" />
        )}
      </Link>
    </div>
  );
}

export default Footer;
