import paymentIcon from "../assets/payment-icon.svg";
import bookmarkIcon from "../assets/bookmark-icon.svg";
import userIcon from "../assets/user-icon.svg";
import chatIcon from "../assets/chat-icon.svg";

import { ServiceCard } from "../components";

const Services = () => {
  return (
  <div className="bg-white mt-36">
    <div className="py-28 bg-lightest-gray">
      <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-6 lg:gap-12 mb-9">
        <h1 className="head_text flex-1 text-center lg:text-start">
          See <span className="orange_text">best services</span> for your solution
        </h1>
        <p className="text-subtitle-gray flex-1 text-center">
           Your one-stop destination for an exceptional travel experience.
           We understand that the key to a successful journey lies in the quality of services provided, and this is where we shine.
        </p>
      </div>
    </div>
    <div className="wrapper">
      <div className="mt-5 lg:-mt-[110px] flex flex-col lg:flex-row items-center lg:items-start gap-5">
        <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
          <ServiceCard iconSrc={paymentIcon} title="Secured Payment"/>
          <ServiceCard iconSrc={bookmarkIcon} title="Any class vehicle"/>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
          <ServiceCard iconSrc={userIcon} title="Car sharing options"/>
          <ServiceCard iconSrc={chatIcon} title="Help center & support"/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
