import { FC, memo } from "react";

interface GenrePillProps {
  genres: string[];
}

const GenrePill: FC<GenrePillProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span
          key={genre}
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full"
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default memo(GenrePill);
