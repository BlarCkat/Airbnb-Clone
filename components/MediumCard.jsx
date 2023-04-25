import Image from "next/image";

const MediumCard = ({key, image, title}) => {
    return ( 
        <>
        <div className="">
            <div className="relative h-[300px] w-[300px]">
                <Image src={image} fill={'true'} className="rounded-xl"/>
            </div>
            <h2>{title}</h2>
        </div>
        </>
     );
}
 
export default MediumCard;