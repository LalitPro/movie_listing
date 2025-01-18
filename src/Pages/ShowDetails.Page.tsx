import { FC, memo, useEffect } from "react";
import ShowDetail from "../Components/ShowDetail";
import { Link } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import withRouter, { WithRouterProps } from "../WithRouter";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import { showsMapSelector } from "../selectors/Shows";
import { loadShowAction } from "../actions/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";

type OwnProps = WithRouterProps;

type ShowDetailPageProps = ReduxProps & OwnProps;

const ShowDetailsPage: FC<ShowDetailPageProps> = ({
  params,
  show,
  loadShow,
}) => {
  useEffect(() => {
    loadShow(+params.showId);
  }, [params.showId]);

  if (!show) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <Link className="flex items-center gap-2" to="/">
        <IoArrowBack /> Back
      </Link>
      <div className="flex gap-8 px-20 py-10">
        {show && <ShowDetail key={show.id} show={show} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: WithRouterProps) => {
  return { show: showsMapSelector(state)[+ownProps.params.showId] };
};

const mapDispatchToProps = {
  loadShow: loadShowAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(memo(ShowDetailsPage)));

// ASSIGNMENTS:

// Step 1 - Do whatever Sir did in class ✔✔✔

// Step 2 - Keep cast hardcoded but make upper part dynamic ✔✔✔

// Step 3 - Upper dynamic part should work even on page reload ✔✔✔

// Step 4 - Cast part also dynamic ✔✔✔
