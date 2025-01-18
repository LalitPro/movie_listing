import { FC, memo } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          MOVIES
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
