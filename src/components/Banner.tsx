import "./home.scss";

import CoworkerImg from "../assets/images/Coworking-img.png";

export default function Banner() {
  return (
    <div className="herobannerSection">
      <div className="herobannerLeft">
        <h1>
          Host your meeting with world-class amenities. Starting at{" "}
          <span>₹199/-!</span>
        </h1>
      </div>

      <div className="herobannerRight">
        <img src={CoworkerImg} alt="CoworkerImg" />
        {/* <video autoPlay muted>
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1324254485881541552/TEAM/df05/05f4/-6b93-4411-a804-4c43509f7e23?Expires=1736121600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=pF4dvscitsJTBVXjuYe7SKl00uXU3HpH2jRwgwpHHlQNjp6UG9hf8spE2Ntz~CkDx~Rnuq~gYHeOqWS0Z0ExN14nD9Ez9vtJIdaF26czRtqQj06pz1nRGakxYOPvaTn4a-vV-gyQ2WNOUdNdfprKgldrw~24sNL4~fscMf-ZKfw6vckydZUUWowmXI9kU81J0TDmzpMJ-XOUttlPew5TNXAKhE3dppRWsvFbceeBZfocy0y0PzUTikTxFjfLsu5BzeayO1uKxcBYO-Tz7lBem6Q-FRH5D4KKH3Koj6XBbPArjgGhOnb6AwNO-nj-WmTkyowVRb-diqrpQYbplXqiAw__"
            type="video/mp4"
          />
        </video> */}
      </div>
    </div>
  );
}
