import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="mt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          We've got <span className="orange_text">answers</span>
        </h1>

        <Accordion
          open={open === 1}
          className="max-w-[860px] mx-auto"
        >
          <AccordionHeader onClick={() => handleOpen(1)} className="text-dark-gray">
            Why to go with GoCar rental services?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
            Choose GoCar Rental Services for your journey because we offer more than just a car - we provide you with the freedom to explore, the reliability you need, and the convenience you deserve. 
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="max-w-[860px] mx-auto"
        >
          <AccordionHeader onClick={() => handleOpen(2)} className="text-dark-gray">
            What is the refund policy of this car rental service?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
          Our refund policy is designed with your peace of mind in mind. We offer flexible refund options to accommodate changes in your plans.
          Visit our website or contact our customer support team for specific details on our refund policy, ensuring your satisfaction is our top priority. 
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="max-w-[860px] mx-auto"
        >
          <AccordionHeader 
            onClick={() => handleOpen(3)} 
            className="text-dark-gray"
          >
            What is the cost for just one day of renting?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
          We offer competitive pricing to suit your short-term needs.
          To get a quote tailored to your specific requirements, visit our website or reach out to our team for a quick and transparent cost estimate for a single day of renting. 
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
