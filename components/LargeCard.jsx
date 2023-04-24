import Image from "next/image";

const LargeCard = ({image, title, description, actionText}) => {
    return ( 
        <>
        <div className="">
        <div className=" relative w-[200px] h-[100px]">
            <Image src={image} fill="true"/>
        </div>
        <div className="">
          <h1>{title}</h1>
          <p>{description}</p>  
        </div>
        {actionText}
        </div>
        </>
     );
}
 
export default LargeCard;