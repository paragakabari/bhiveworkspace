import "./home.scss";
import AppImg from "../assets/icons/app-store.png";
import GoogleImg from "../assets/icons/google-pay.png";
import MobileImg from "../assets/images/mobile-app-img.png";

export default function DownloadApp() {
  return (
    <div className="downloadSection">
      <div className="container">
        <div className="downloadAlignment">
          <h2>Download our app now</h2>
          <div className="downloadAppAllDetails">
            <div className="downloadAppDetailsBox">
              <div className="downloadAppwidthAlignment">
                <p>
                  Boost your productivity with the BHIVE Workspace app. Elevate
                  your workspace, collaborate efficiently, and unlock exclusive
                  perks.
                </p>

                <div className="appDetailsAlignment">
                  <img src={GoogleImg} alt="GoogleImg" />
                  <img src={AppImg} alt="AppImg" />
                </div>

                <div className="downloadLeftSideImg">
                  <img src={MobileImg} alt="MobileImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
