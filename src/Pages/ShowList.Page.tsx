import { FC, memo, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { searchShows } from "../api";
import { showsLoadedAction, showsQueryChangeAction } from "../actions/Shows";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import {
  showsLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../selectors/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowListPageProps = ReduxProps;

const ShowListPage: FC<ShowListPageProps> = ({
  showsLoaded,
  showsQueryChange,
  query,
  shows,
  loading,
}) => {
  if (!shows) {
    searchShows("HOMEPAGE").then((response) => {
      return showsLoaded(response);
    });
  }
  console.log(shows);
  useEffect(() => {
    searchShows(query).then((response) => {
      return showsLoaded(response);
    });
  }, [query]);

  return (
    <div className="p-4">
      <SearchBar
        value={query}
        onChange={(event) => {
          showsQueryChange(event.target.value);
        }}
      />
      {loading || (!shows && <LoadingSpinner />)}

      <div className="flex flex-wrap gap-4 px-20">
        {shows && shows.map((show) => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    query: showsQuerySelector(state),
    shows: showsSelector(state),
    loading: showsLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  showsLoaded: showsLoadedAction,
  showsQueryChange: showsQueryChangeAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(memo(ShowListPage));
