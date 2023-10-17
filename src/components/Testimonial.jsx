import quoteIcon from "../assets/quote-icon.svg";

const Testimonial = () => {
  return <div>
    <img 
      src={quoteIcon} 
      alt=""
      className="mx-auto" 
    />
    <h3 className="text-light-gray text-3xl text-center tracking-wider">
    Exceptional service and a fantastic car selection made my trip unforgettable.
    </h3>
    <p className="text-dark-gray font-bold text-center uppercase mt-[30px]">
      Ghost
    </p>
  </div>;
};

export default Testimonial;
