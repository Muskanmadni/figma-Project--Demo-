;import Image from "next/image"
import MacBook from "@/components/images/MacBook.png";
import playstation from "@/components/images/PlayStation.png";
import airpod from"@/components/images/airpod.png";
import VR from"@/components/images/VR.png";
import camera from "@/components/images/camera-vector.png"
import gaming from "@/components/images/Gaming-vector.png"
import smartwatches from "@/components/images/Smart Watches.png"
import phone from "@/components/images/mobile-vector.png"
import headphones from "@/components/images/Headphones -vector.png"
import computers from"@/components/images/Computers-vector.png"
import macbook1 from "@/components/images/Macbook 1.png"
import ipad from "@/components/images/ipad.png"
import samsungphone from "@/components/images/samsungPhone.png"
import popularcard from "@/components/images/popularProducts.png"
import banner from "@/components/images/Banner 2.png"
import iphoneGolden from "@/components/images/Iphone 14 pro 1.png"
import appleWatch from "@/components/images/appleWatch.png"
import appleHeadphons from "@/components/images/discountHeadphone.png"
import favoritelogo from "@/components/images/Favorites.png"
import IphonePurple from "@/components/images/Iphone-purple.png"
import bannerCamera from "@/components/images/camera.png"
import watch from "@/components/images/watch.png"
import tablet from "@/components/images/tablet.png"
import earpod from "@/components/images/earpod.png"
import foldPhone from "@/components/images/foldPhone.png"


export function MacCard(){
    return(
        <div className="macBook-card">
            <div className="mac-text">
                <p className="mac-text-1">Macbook</p>
                <p className="mac-text-2">Air</p>
                <p className="mac-text-3">The new 15-inch MacBook Air makes room for more
                    <br/>
                    of what you love with a spacious Liquid Retina
                    <br/>display.
                </p>
                <div className="mac-button">
                    <button className="mac-shop-button" >Shop Now</button>
                </div>
                
            </div>
            <div className="macbook-Image">
                <Image className="w-[300px] h-[300px]" src={MacBook} alt="Macbook"></Image>
            </div>
        </div>
    );
}
export function PlaystationCard(){
    return(
        <div className="playstation-card">
            <div className="playstation-text">
                <p className="playstation-text-1">Playstation 5</p>
                <p className="playstation-text-2">Incredibly powerful CPUs, GPUs, and an SSD with 
                    <br/>
                    integrated I/O will redefine your PlayStation <br/>experience.</p>
            </div>
            <div className="playstation-Image">
                <Image className="w-[300px] h-[198px]" src={playstation} alt="playstaion-Image"></Image>
            </div>
        </div>
    );
}

export function AirpodCard(){
    return(
        <div className="Airpod-card">
            <div className="Airpod-text">
                <p className="airpod-text-1">Apple</p>
                <p className="airpod-text-2">AirPods</p>
                <p className="airpod-text-3">Max</p>
                <p className="airpod-text-4">Computational audio. <br/>Listen, it's powerful</p>
            </div>
            <div className="Airpod-image">
                <Image className="w-[100px] h-[200px]" src={airpod} alt="Airpod-Image"></Image>
            </div>
        </div>
    );
}

export function VisionCard(){
    return(
        <div className="vision-card">
            <div className="vision-text">
                <p className="vision-text-1">Apple</p>
                <p className="vision-text-2">Vision <span className="font-bold">Pro</span></p>
                <p className="vision-text-3">An immersive way to<br/>experience<br/>entertainment</p>
            </div>
            <div className="vision-Image">
                <Image className="w-[180px] h-[150px]" src={VR} alt="VRImage"></Image>
            </div>
        </div>
    );
}
// function of category


export function Category(){
    return(
        <div className="category-card">
            <p className="Category-heading">Browse By Category</p>
            {/* Phone container */}

            <div className="container-1">
                <p className="text-1">Phone</p>
                <div className="container-image">
                    <Image src={phone} alt="vector"></Image>
                </div>
            </div>

            {/* Camera Conatiner */}

            <div className="container-2">
                <p className="text-2">Cameras</p>
                <div className="container-image">
                    <Image src={camera} alt="vector"></Image>
                </div>
            </div>

            {/* headphone Container */}

            <div className="container-3">
                <p className="text-3">headphones</p>
                <div className="container-image">
                    <Image src={headphones} alt="vector"></Image>
                </div>
            </div>

            {/* Computer Container */}

            <div className="container-4">
                <p className="text-4">Computers</p>
                <div className="container-image">
                    <Image src={computers} alt="vector"></Image>
                </div>
            </div>

            {/* Gaming Container */}

            <div className="container-5">
                <p className="text-5">Gaming</p>
                <div className="container-image">
                    <Image src={gaming} alt="vector"></Image>
                </div>
            </div>

            {/* Smart watch container */}

            <div className="container-6">
                <p className="text-6">Smart Watches</p>
                <div className="container-image">
                    <Image src={smartwatches} alt="vector"></Image>
                </div>
            </div>
        </div>
    );
}
// function of homepage products 1 row

export function HomepageProducts(){
    return(
        <div className="homepage-products">
            <div className="top-options">
                <ul className="options">
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Featured Products</li>
                </ul>
            </div>

            <div className="product-cards">
                <div className="product-images">
                    <Image src={IphonePurple} alt="image"></Image>
                </div>

                <p className="tittle">Apple iPhone 14 Pro Max 128GB Deep Purple </p>
                <p className="prices">$900</p>
    
            </div>
            <div className="product-cards">

                <div className="product-images">
                    <Image src={bannerCamera} alt="image"></Image>
                </div>

                <p className="tittle">Blackmagic Pocket Cinema Camera 6k</p>
                <p className="prices">$2535</p>
                    
            </div>
            <div className="product-cards">

                <div className="product-images">
                    <Image src={appleWatch} alt="image"></Image>
                </div>

                <p className="tittle">Apple Watch Series 9 GPS 41mm Starlight Aluminium </p>
                <p className="prices">$399</p>
                    
            </div>
            <div className="product-cards">

                <div className="product-images">
                    <Image src={appleHeadphons} alt="image"></Image>
                </div>

                <p className="tittle">AirPods Max Silver Starlight Aluminium</p>
                <p className="prices">$549</p>
                    
            </div>
            <div className="product-cards-2-row">

                <div className="product-images">
                    <Image src={watch} alt="image"></Image>
                </div>

                <p className="tittle">Samsung Galaxy Watch6 Classic 47mm Black</p>
                <p className="prices">$369</p>
                    
            </div>
            <div className="product-cards-2-row">

                <div className="product-images">
                    <Image src={foldPhone} alt="image"></Image>
                </div>

                <p className="tittle">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</p>
                <p className="prices">$1799</p>
                    
            </div>
            <div className="product-cards-2-row">

                <div className="product-images">
                    <Image src={earpod} alt="image"></Image>
                </div>

                <p className="tittle">Galaxy Buds FE <br/>Graphite</p>
                <p className="prices">$99.99</p>
                    
            </div>
            <div className="product-cards-2-row">

                <div className="product-images">
                    <Image src={tablet} alt="image"></Image>
                </div>

                <p className="tittle">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</p>
                <p className="prices">$398</p>
                    
            </div>
        </div>
    );
}

export function HomepageShopCard(){
    return(



        <div className="Shop-cards">
            <div className="mac-shop-card">
                <div className="shop-card-text">
                    <p className="mac-shopcard-text-1 font-bold">Macbook Pro</p>
                    <p className="mac-shopcard-text-2">iPad combines a magnificent 10.2-inch Retina<br/> display, incredible performance, multitasking<br/> and ease of use.</p>                    
                </div>
                <div className="shop-card-Images">
                    <Image className="w-[350px] h-[350px]" src={macbook1} alt="cardimage"></Image>
                    <div className="shop-card-button-mac">
                        <button className="shop-card-shop-button-mac" >Shop Now</button>
                    </div>
                </div>
            </div>



            <div className="samsung-shop-card">
                <div className="shop-card-text">
                    <p className="shopcard-heading">Samsung Galaxy </p>
                    <p className="shopcard-paragraph">iPad combines a magnificent 10.2-inch Retina <br/>display, incredible performance, multitasking <br/>and ease of use</p>                    
                </div>
                <div className="shop-card-Images">
                    <Image className="w-[350px] h-[250px]" src={samsungphone} alt="cardimage"></Image>
                    <div className="shop-card-button-samsung">
                        <button className="shop-card-shop-button-samsung" >Shop Now</button>
                    </div>
                </div>
            </div>



            <div className="ipad-shop-card">
                <div className="shop-card-text">
                    <p className="shopcard-heading">Ipad Pro</p>
                    <p className="shopcard-paragraph">iPad combines a magnificent 10.2-inch Retina <br/>display, incredible performance, multitasking<br/> and ease of use</p>                    
                </div>
                <div className="shop-card-Image-ipad">
                    <Image className="w-[200px] h-[250px]" src={ipad} alt="cardimage"></Image>
                    <div className="shop-card-button-ipad">
                        <button className="shop-card-shop-button-ipad" >Shop Now</button>
                    </div>
                </div>   
            </div>



            <div className="popular-shop-card">
                <div className="shop-card-text">
                    <p className="shopcard-heading">Popular Products</p>
                    <p className="shopcard-paragraph">iPad combines a magnificent 10.2-inch Retina<br/>display, incredible performance, multitasking<br/> and ease of use</p>                    
                </div>
                <div className="shop-card-Images">
                    <Image className="w-[350px] h-[350px]" src={popularcard} alt="cardimage"></Image>
                    <div className="shop-card-button">
                        <button className="shop-card-shop-buttons" >Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function ProductsBanners(){
    return(
        <div className="products-banner">
            <div className="top-heading">
                <div className="discount-heading">
                    <p className="">Discounts up to -50%</p>
                </div>
            </div>
            <div className="containers">
                <div className="banner-container-text">
                    <p className="banner-text">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
                    <p className="font-bold">$1437</p>
                    <div className="product-banner-image">
                        <Image src={iphoneGolden} alt="banner-image"></Image>
                    </div>
                    <div className="product-banner-fav-logo">
                        <Image src={favoritelogo} alt="favorite-logo"></Image>
                    </div>

                    <div className="product-banner-button">
                        <button className="product-banner-button-icon">Buy Now</button>
                    </div>
                </div>

            </div>

            <div className="containers">
                <div className="banner-container-text">
                    <p className="banner-text">AirPods Max Silver Starlight Aluminium</p>
                    <p className="font-bold">$549</p>

                    <div className="product-banner-image">
                        <Image src={appleHeadphons} alt="banner-image"></Image>
                    </div>

                    <div className="product-banner-fav-logo">
                        <Image src={favoritelogo} alt="favorite-logo"></Image>
                    </div>

                    <div className="product-banner-button">
                        <button className="product-banner-button-icon">Buy Now</button>
                    </div>
                </div>

            </div>

            <div className="containers">
                <div className="banner-container-text">
                    <p className="banner-text">Apple Watch Series 9 GPS 41mm Starlight Aluminium</p>
                    <p className="font-bold">$399</p>

                    <div className="product-banner-image">
                        <Image src={appleWatch} alt="banner-image"></Image>
                    </div>

                    <div className="product-banner-fav-logo">
                        <Image src={favoritelogo} alt="favorite-logo"></Image>
                    </div>
                    
                    <div className="product-banner-button">
                        <button className="product-banner-button-icon">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="containers">
                <div className="banner-container-text">
                    <p className="banner-text">iPhone 14 Pro 1TB Gold <br/>(MQ2V3)</p>
                    <p className=" font-bold">$1499</p>
                    <div className="product-banner-image">
                        <Image src={iphoneGolden} alt="banner-image"></Image>
                    </div>
                    <div className="product-banner-fav-logo">
                        <Image src={favoritelogo} alt="favorite-logo"></Image>
                    </div>
                    <div className="product-banner-button">
                        <button className="product-banner-button-icon" >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function BottomBanner(){
    return(
        <div className="bottom-banner">
            <div className="bottom-text">
                <p className="bottom-banner-text-1">Big Summer <span className="font-bold">Sale</span></p>
                <p className="bottom-banner-text-2">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

            </div>   
            <div className="bottom-banner-Image">
                <Image className="w-[1600px] h-[400px]" src={banner} alt="banner"></Image>
                <div className="banner-button">
                    <button className="banner-button-class">Shop Now</button>
                </div>
            </div>  
        </div>
    )
}





