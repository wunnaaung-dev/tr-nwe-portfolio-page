import Image from "next/image";

const Card = ({ title, imgSrc, description }) => {
  return (
    <div className="w-full md:w-96 h-fit lg:w-80 relative rounded-lg bg-yellow-400 pb-3 shadow-xl">
      <div className="card-img-container">
        <Image className="rounded-lg" src={imgSrc} alt="img" width={400} height={800} />
      </div>
      <h3 className="text-center text-xl text-[#171d1c] font-bold mt-4">{title}</h3>
      <p className="w-full text-center text-sm px-3 text-slate-600 italic mt-2">{description}</p>
    </div>
  );
};

export default Card;
