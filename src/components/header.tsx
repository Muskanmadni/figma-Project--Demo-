import Image from "next/image";
import logo from "@/components/images/Logo.png"
import Favorites from "@/components/images/Favorites.png";
import Cart from "@/components/images/Cart.png";
import User from "@/components/images/User.png";
import Search from "@/components/images/Search.png";




export function Header(){
    return(
        <div className="header">
        <div className="imageLogo">
            <Image src={logo} alt="logo" width={90}height={100}></Image>
        </div>
        <div >
            <form className="searchContainer">
                <input className="searchBar" type="text" placeholder="Search..." />
                <button type="submit">  

                </button>
            </form>
        </div>
        <div >
            <ul className="headerButtons">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>blog</li>
            </ul>
            <div className="search-Icon">
                <Image className="w-[20px] h-[22px]" src={Search} alt="search-Icon"></Image>   
            </div> 
        </div>
        <div>
            <div className="Icons">
                <form> 
                    <button type="submit">
                        <ul className="Icons">
                            {/* <Link> */}
                            <Image src={Favorites} alt="Icon"></Image>
                            {/* </Link> */}
                            {/* <Link> */}
                            <Image src={Cart} alt="Icon"></Image>
                            {/* </Link> */}
                            {/* <Link> */}
                            <Image src={User} alt="Icon"></Image>
                            {/* </Link> */}
                        </ul>
                    </button> 
                </form>
                
                    
                
                
            </div>
        </div>
        </div>
    );
}
