import Image from "next/image";

const ClassCard = ({ classification, level, subjects }) => {
  return (
    <div className="w-72 rounded-xl shadow-2xl relative">
      <div className="bg-[#f05d23] rounded-t-xl py-2 flex justify-around items-center w-full">
        <div className="circle"></div>
        <h3 className="text-center font-bold text-white text-sm text-wrap">
          {classification}
        </h3>
        <div className="circle"></div>
      </div>
      <div className="rounded-b-xl p-3">
        <p className="text-center  font-semibold italic">{level}</p>
        <div className="absolute bottom-0 -left-9">
          <Image src="/Book.png" alt="book-img" width={60} height={100} />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {subjects.map((subject) => (
            <p className="text-xs text-slate-400" key={subject}>{subject}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
