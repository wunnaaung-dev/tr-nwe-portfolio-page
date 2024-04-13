import Image from "next/image";

const Card = ({ title, imgSrc, description }) => {
  return (
    <div className="w-80 relative rounded-lg bg-yellow-400 pb-3 shadow-xl">
      <div className="card-img-container relative">
        <Image className="rounded-lg" src={imgSrc} alt="img" width={400} height={800} />
      </div>
      <h3 className="text-center text-xl text-[#171d1c] font-extrabold">{title}</h3>
      <p className="text-center w-full text-sm px-3 text-[#171d1c]">{description}</p>
    </div>
  );
};

export default Card;
