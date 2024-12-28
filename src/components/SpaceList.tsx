import { useSpaces } from "../hooks/useSpace";
import { Space } from "../types";
import "./home.scss";
import SpaceCard from "./SpaceCard";

const SpaceList = () => {
  const { data, isLoading, error } = useSpaces();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <>
      <div className="ourSpaceOverviewSection">
        <div className="container">
          <div className="ourSpaceOverviewAlignment">
            <h2>Our Space Overview</h2>
            <div className="ourSpaceOverviewGrid">
              {data.map((space: Space) => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceList;
