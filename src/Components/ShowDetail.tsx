import { FC, memo } from "react";
import GenrePill from "./GenrePill";
import CastCard from "./CastCard";
import { Show } from "../models/Show";

type ShowDetailProps = {
  show: Show;
};

const ShowDetail: FC<ShowDetailProps> = ({ show }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <img
            src={
              show.image?.medium || show.image?.original || "./defaultImage.png"
            }
            alt={show.name}
            className="self-center object-cover w-64 rounded-lg shadow-lg justify-self-center h-96"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">{show.name}</h1>

            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-500">★</span>
              <span className="text-xl text-gray-700">
                {show.rating?.average}
              </span>
            </div>

            <GenrePill genres={show.genres} />

            <p
              dangerouslySetInnerHTML={{ __html: show.summary! }}
              className="text-sm text-gray-600 line-clamp-3"
            ></p>
          </div>
        </div>

        <div>
          {show.casts &&
            (show.casts.length <= 0 ? (
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Casts Not Availble
              </h2>
            ) : (
              <>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Cast</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {show.casts?.map((cast: any) => (
                    <CastCard key={cast.person.name} cast={cast} />
                  ))}
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ShowDetail);
