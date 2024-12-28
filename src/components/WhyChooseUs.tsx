import "./home.scss";
import ChooseIcon from "../assets/icons/choose-icon.svg";
import ChooseIcon1 from "../assets/icons/choose-icon1.svg";
import ChooseIcon2 from "../assets/icons/choose-icon2.svg";
import ChooseIcon3 from "../assets/icons/choose-icon3.svg";
import ChooseIcon4 from "../assets/icons/choose-icon4.svg";
import ChooseIcon5 from "../assets/icons/choose-icon5.svg";
import ChooseIcon6 from "../assets/icons/choose-icon6.svg";
import ChooseIcon7 from "../assets/icons/choose-icon7.svg";

interface ChooseItem {
  icon: string;
  name: string;
}

export default function WhyChooseUs() {
  // Dynamic data array
  const chooseData: ChooseItem[] = [
    { icon: ChooseIcon, name: "Comfort Lounges" },
    { icon: ChooseIcon1, name: "Gym Facilities" },
    { icon: ChooseIcon2, name: "High-Speed WiFi" },
    { icon: ChooseIcon3, name: "Cafe & Tea Bar" },
    { icon: ChooseIcon4, name: "Affordable" },
    { icon: ChooseIcon5, name: "Comfort Lounges" },
    { icon: ChooseIcon6, name: "Quick Booking" },
    { icon: ChooseIcon7, name: "Sports Area" },
  ];

  return (
    <div className="whyChooseSection">
      <div className="container">
        <div className="whyChooseAlignment">
          <h2>Why Choose Us?</h2>

          <div className="whyChooseGrid">
            {chooseData.map((item, index) => (
              <div key={index} className="whyChooseGridItem">
                <div className="whyChooseChildGrid">
                  <div className="whyChooseIcon">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
