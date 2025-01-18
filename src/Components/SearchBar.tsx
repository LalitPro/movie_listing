import { FC, InputHTMLAttributes, memo } from "react";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="flex items-center justify-center w-full gap-2 px-4 py-2 mx-auto my-4 bg-white border rounded-full shadow-sm max-w-7xl">
      <CiSearch className="text-xl text-gray-400" />
      <input
        type="text"
        {...props}
        placeholder="Search shows..."
        className="w-full bg-transparent border-none outline-none placeholder:text-gray-400"
      />
    </div>
  );
};

export default memo(SearchBar);
