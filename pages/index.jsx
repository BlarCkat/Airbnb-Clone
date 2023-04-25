import { useState } from "react";
import SmallCard from "../components/smallCard";
import MediumCard from "../components/MediumCard";

const { default: Banner } = require("../components/banner")
const { default: HeaderComponent } = require("../components/header")

const HomeView = ({exploreData}) => {

  const [allNearbyAreas, setAllNearbyAreas] = useState([
    {id: '001', locationName: 'Jakarta', time: '4.5 mins', image: '/img/illustration_img-1.jpeg'},
    {id: '002', locationName: 'Liverpool', time: '30 mins', image: '/img/illustration_img-2.jpeg'},
    {id: '003', locationName: 'Abu Dhabi', time: '17 mins', image: '/img/illustration_img-3.jpeg'},
    {id: '004', locationName: 'London', time: '1 day', image: '/img/illustration_img-2.jpeg'},
    {id: '005', locationName: 'Vienna', time: '18 hours', image: '/img/illustration_img-3.jpeg'},
    {id: '006', locationName: 'Paris', time: '18 hours', image: '/img/illustration_img-1.jpeg'},
    {id: '006', locationName: 'Paris', time: '18 hours', image: '/img/illustration_img-1.jpeg'},
    {id: '006', locationName: 'Paris', time: '18 hours', image: '/img/illustration_img-1.jpeg'},
    {id: '006', locationName: 'Paris', time: '18 hours', image: '/img/illustration_img-1.jpeg'},
    {id: '006', locationName: 'Paris', time: '18 hours', image: '/img/illustration_img-1.jpeg'},
  ]);

  const [allLiveAnywhere, setAllLiveAnywhere] = useState([
    {id: '001', image:'/img/illustration_img-1.jpeg', title: 'Outdoors getaways'},
    {id: '002', image:'/img/illustration_img-1.jpeg', title: 'Unique Stays'},
    {id: '003', image:'/img/illustration_img-1.jpeg', title: 'Pet Allowed'},
    {id: '004', image:'/img/illustration_img-1.jpeg', title: 'Beach Vacations'},
  ]);

  return ( 
    <>
    <HeaderComponent/>
    <Banner/>
    
    <main className="max-w-7xl mx-auto py-8">
      <section>
        <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allNearbyAreas?.map(({image, locationName, key, time}) => (
           <SmallCard key={key} image={image} locationName={locationName} time={time}/>
           ))}
           </div>
        {/* {exploreData} */}

      </section>
      <section>
      
        <h2 className="text-3xl font-semibold pb-5">Live Anywhere</h2>
        <div className="flex flex-row gap-4 overflow-scroll">
        {allLiveAnywhere?.map(({image, key, title}) => (
           <MediumCard key={key} image={image} title={title}/>
           ))}
           </div>
        {/* {exploreData} */}

      </section>
    </main>
    </>
   );
}
 
export default HomeView;

// export async function getStaticProps(){
//   const exploreData = await fetch('https://links.papareact.com/pyp').then(res=> res.json());

//   return {
//     props: exploreData
//   }
// }