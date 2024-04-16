import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

const Heading = ({children}) => {
  return (
    <h1
      className={`${poppins.className} text-center z-30 text-5xl md:text-6xl lg:text-7xl text-[#FFC94A] font-bold`}
    >
      {children}
    </h1>
  );
};

export default Heading;
