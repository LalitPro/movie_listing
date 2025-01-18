import { FC, memo } from "react";
import { Link } from "react-router";
import { Show } from "../models/Show";

type ShowCardProps = {
  show: Show;
};

const placeholderImage = "./defaultImage.png";

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden transition-shadow duration-200 bg-white border border-gray-200 rounded-lg shadow-lg max-w-56 hover:shadow-xl">
        <img
          src={show.image?.medium || show.image?.original || placeholderImage}
          alt={show.name}
          className="object-cover w-full h-64"
        />
        <Link to={"/show/" + show.id}>
          <div className="w-full p-4">
            <h2 className="mb-2 text-xl font-bold text-gray-800">
              {show.name}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: show.summary! }}
              className="text-sm text-gray-600 line-clamp-3"
            ></p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default memo(ShowCard);
