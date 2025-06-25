import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
const Nav = () => {
  return (
    <nav>
      <div>
        <FcGoogle fontSize="45px" cursor="pointer" />
      </div>
      <div>
        <ul>
          <li>
            <FaHome fontsize="35px" />
            HOME
          </li>
          <li>
            <FcAbout fontsize="35px" />
            ABOUT
          </li>
          <li>
            <FcBusinessContact fontsize="35px" />
            CONTACT US
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
