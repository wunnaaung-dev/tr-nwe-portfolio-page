import Image from "next/image"

const ClassCard = ({classification, level, subjects}) => {
  return (
    <div className="w-72 rounded-xl shadow-2xl">
        <div className="bg-[#f05d23] rounded-t-xl py-2 flex justify-around items-center w-full">
            <div className="circle"></div>
            <h3 className="text-center font-bold text-white text-sm text-wrap">{classification}</h3>
            <div className="circle"></div>
        </div>
        <div className="bg-[#FBF6EE] rounded-b-xl p-3 relative h-fit">
            <p className="text-center font-semibold italic">{level}</p>
            <div className="absolute bottom-0 -left-9">
                <Image src="/Book.png" alt="book-img" width={80} height={200}/>
            </div>
            <ul className="flex justify-center items-center gap-1">
                {subjects.map(subject => (
                    <li key={subject} className="text-slate-600 text-wrap text-xs md:text-sm h-full">
                       {subject}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ClassCard