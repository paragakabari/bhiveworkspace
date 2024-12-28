import "./home.scss";
import AssIcon from "../assets/icons/assistant_direction.svg";

import RightArrow from "../assets/icons/right-arrow-1.svg";
import RightArrow2 from "../assets/icons/right-arrow-2.svg";
import RightArrow3 from "../assets/icons/right-arrow-3.svg";
import { Space } from "../types";
import { useNavigate } from "react-router-dom";
import { useSpaceStore } from "../store/useSpaceStore";
import { useState } from "react";

interface SpaceCardProps {
  space: Space;
}

const SpaceCard = ({ space }: SpaceCardProps) => {
  const navigate = useNavigate();
  const setSelectedSpaceId = useSpaceStore((state) => state.setSelectedSpaceId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSpaceClick = (id: string) => {
    if (id && setSelectedSpaceId) {
      setSelectedSpaceId(id);
      navigate(`/space-details/${id}`);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? space.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === space.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const redirectToMap = () => {
    window.open(space.google_maps_url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="ourSpaceOverviewCard">
      <div className="ourSpaceOverviewCardTop">
        <h3>{space.name}</h3>

        <div className="sideBox" onClick={redirectToMap}>
          <img src={AssIcon} alt="AssIcon" />
        </div>
      </div>

      <div
        className="ourSpaceOverviewMiddel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="ourSpaceOverviewImg">
          <div className="sliderContainer">
            {space.images.length > 1 && isHovered && (
              <button className="sliderButton" onClick={handlePrev}>
                &#8592;
              </button>
            )}

            <img
              src={space.images[currentIndex]}
              alt={`Space Image ${currentIndex + 1}`}
              className="sliderImage"
            />
            {space.images.length > 1 && isHovered && (
              <button className="sliderButton" onClick={handleNext}>
                &#8594;
              </button>
            )}
          </div>

          <div className="topAlignment">
            <h4>Workspace</h4>
          </div>
        </div>
      </div>

      <div className="ourSpaceOverviewBottom">
        <div className="ourSpaceButton">
          <div>
            <h5>Day Pass</h5>
            <h6>
              ₹ {space.day_pass_price}
              <span>/ Day</span>
            </h6>
          </div>

          <div className="rightSideArrow">
            <img src={RightArrow} alt="Right Arrow" />
            <img src={RightArrow2} alt="Right Arrow 2" />
            <img src={RightArrow3} alt="Right Arrow 3" />
          </div>
        </div>
        <div
          className="ourSpaceButton discountBox"
          onClick={() => handleSpaceClick(space.id)}
        >
          <div className="discountBox">
            <div className="discountDetailsBox">
              <p> 20% Discount </p>
            </div>
          </div>
          <div>
            <h5>Day Pass</h5>
            <h6>
              ₹ {space.day_pass_price * 10 * (1 - 20 / 100)} <span>/ Day</span>
            </h6>
          </div>

          <div className="rightSideArrow">
            <img src={RightArrow} alt="Right Arrow" />
            <img src={RightArrow2} alt="Right Arrow 2" />
            <img src={RightArrow3} alt="Right Arrow 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
