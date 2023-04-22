const { default: Banner } = require("../components/banner")
const { default: HeaderComponent } = require("../components/header")

const HomeView = () => {
  return ( 
    <>
    <HeaderComponent/>
    <Banner/>
    <p>This is an airbnb clone.</p>
    </>
   );
}
 
export default HomeView;