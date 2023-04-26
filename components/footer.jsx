import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-32 py-12 bg-gray-50 pt-32">
            <div className=" text-gray-600 py-10">
                <h5 className="font-bold text-2xl">About</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className=" text-gray-600 py-10">
                <h5 className="font-bold text-2xl">Community</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Airbnb Partners</p>
                <p>Download App</p>
                <p>Host an Airbnb</p>
            </div>

            <div className=" text-gray-600 py-10">
                <h5 className="font-bold text-2xl">Social</h5>
                <p className="flex flex-row items-center gap-2"><i><FaTwitter/></i> Twitter</p>
                <p className="flex flex-row items-center gap-2"><i><FaInstagram/></i> Instagram</p>
                <p className="flex flex-row items-center gap-2"><i><FaFacebook/></i> Facebook</p>
                <p className="flex flex-row items-center gap-2"><i><FaTiktok/></i> TikTok</p>
                <p className="flex flex-row items-center gap-2"><i><FaYoutube/></i> Youtube</p>
            </div>


            <div className=" text-gray-600 py-10">
                <h5 className="font-bold text-2xl">Legal</h5>
                <p>End-User Agreement</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Customer Support</p>
                <p>Help</p>
            </div>

        </footer>
        </>
     );
}
 
export default Footer;