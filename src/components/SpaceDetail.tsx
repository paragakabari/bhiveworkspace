import { useSpaceDetails } from "../hooks/useSpace";
import { useSpaceStore } from "../store/useSpaceStore";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SpaceDetails = () => {
  const spaceId = useSpaceStore((state) => state.selectedSpaceId);
  const { data, isLoading, error } = useSpaceDetails(spaceId!);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  if (!spaceId) return <p>Select a post to see details.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading post details.</p>;

  const navigatorToMain = () => {
    navigate("/");
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="container">
        <div>
          <h1 className="pb-2 pt-10">{data?.name}</h1>
          <p className="pb-20">{data?.description}</p>
          <div className="sliderContainer">
            {data.images.length > 1 && (
              <button className="sliderButton" onClick={handlePrev}>
                &#8592;
              </button>
            )}

            <img
              src={data.images[currentIndex]}
              alt={`data Image ${currentIndex + 1}`}
              className="sliderImage"
            />
            {data.images.length > 1 && (
              <button className="sliderButton" onClick={handleNext}>
                &#8594;
              </button>
            )}
          </div>
          <p className="pb-20 pt-10">{data?.address}</p>
        </div>
        <div className="stepindicator">
          <div className="step">1</div>
          <div className="line active"></div>
          <div className="step inactive">2</div>
          <div className="line"></div>
          <div className="step inactive">3</div>
          <div className="line"></div>
          <div className="step inactive">4</div>
        </div>

        <div className="card">
          <div className="icon">
            {/* <img src={mobileIcon} alt="Mobile Icon" /> */}
          </div>

          <div className="formgroup">
            <label>Please enter your mobile number</label>
            <input type="text" placeholder="+91 9999 9999 99" />
          </div>

          <div className="buttongroup">
            <button className="back" onClick={navigatorToMain}>
              Back
            </button>
            <button className="getotp">Get OTP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
