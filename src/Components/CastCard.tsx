import { FC, memo } from "react";

interface CastCardProps {
  cast: any;
}

const CastCard: FC<CastCardProps> = ({ cast }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <img
        src={
          cast.character?.image?.medium ||
          cast.character?.image?.orignal ||
          cast.person.image?.medium ||
          cast.person.image?.orignal
        }
        alt={cast.person.name}
        className="object-cover w-32 h-32 rounded-full"
      />
      <div className="text-center">
        <h3 className="font-medium text-gray-900">{cast.person.name}</h3>
        <p className="text-sm text-gray-500">{cast.character.name}</p>
      </div>
    </div>
  );
};

export default memo(CastCard);
