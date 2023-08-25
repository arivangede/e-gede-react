import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LogoMenu from "../Assets/icon/logo-tengah.png";

const Navbar = () => {
  return (
    <nav className="relative">
      <ul className="flex justify-between items-center p-2 gap-4 border rounded-t-lg shadow bg-white">
        <CustomLink
          to="/"
          className="w-12 flex flex-col items-center justify-center "
        >
          <i className="bx bx-home text-xl leading-5"></i>
          <span className="text-xs font-semibold">Beranda</span>
        </CustomLink>

        <CustomLink
          to="/activity"
          className="w-12 flex flex-col items-center justify-center "
        >
          <i className="bx bx-collection bx-rotate-270 text-xl leading-5"></i>
          <span className="text-xs font-semibold">Aktivitas</span>
        </CustomLink>

        <li>
          <Link className="flex flex-col items-center justify-center  -mt-8 h-16 w-16 p-1 border rounded-full shadow-lg bg-red-300">
            <img className="w-full h-full" src={LogoMenu} alt="menu" />
          </Link>
        </li>

        <CustomLink
          to="/notification"
          className="w-12 flex flex-col items-center justify-center "
        >
          <i className="bx bx-bell text-xl leading-5"></i>
          <span className="text-xs font-semibold">Notifikasi</span>
        </CustomLink>

        <CustomLink
          to="/profile"
          className="w-12 flex flex-col items-center justify-cente"
        >
          <i className="bx bx-user-circle text-xl leading-5"></i>
          <span className="text-xs font-semibold">Profil</span>
        </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "text-red-500" : "text-slate-500"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
