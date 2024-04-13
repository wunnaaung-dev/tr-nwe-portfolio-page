import Image from "next/image"

const Students = ({imgSrc}) => {
  return (
    <div>
        <Image src={imgSrc} alt="students" fill/>
    </div>
  )
}

export default Students