const Step = ({title}) => {
  return (
    <div className="flex flex-col gap-2.5 w-fit md:w-[310px] h-[165px] md:h-fit">
      <p className="text-dark-gray font-bold uppercase">{title}</p>
      <p className="text-light-gray">Whether you need a car for a quick city getaway or an extended road trip, we have the perfect ride to suit your needs.</p>
    </div>
  )
};

export default Step;
