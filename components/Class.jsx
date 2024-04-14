import { classes } from "@/data/data";
import ClassCard from "./ClassCard";

const Class = () => {
  return (
    <section id="classes" className="mt-4">
      <h1 className="text-5xl text-center md:text-6xl lg:text-7xl text-[#FFC94A] font-bold">
        Classes
      </h1>
      <p className="w-full md:w-1/2 text-center mx-auto mt-2">
        Choose how you want to learn:{" "}
        <span className="text-green-400 italic font-semibold">online</span> or{" "}
        <span className="text-green-400 italic font-semibold">in-person</span>.
        I have lots of classes at different times. Come learn with us and find
        new ways to grow and explore!
      </p>
      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {classes.map((item) => (
            <ClassCard
              key={item.id}
              classification={item.classification}
              level={item.level}
              subjects={item.subjects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Class;
