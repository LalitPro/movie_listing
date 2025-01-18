import { FC, memo } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <header className="self-end w-full p-4 mt-auto bg-white shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-gray-600 hover:text-gray-900"></Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                to="https://lalitweb.netlify.app/"
                className="text-xl font-bold text-gray-800"
              >
                Made By Lalit Yadav
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Footer);
