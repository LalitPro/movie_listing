import { FC, memo } from "react";
import { ImSpinner } from "react-icons/im";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-7xl">
      <ImSpinner className="duration-100 animate-spin" />
    </div>
  );
};

export default memo(LoadingSpinner);
