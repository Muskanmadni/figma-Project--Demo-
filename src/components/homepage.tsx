import Image from "next/image"
import iphoneImage from "@/components/images/iphoneImage.png"
export function Home(){
    return(

        <div className="background">
            
            <div className="text">
                <p className="firstText">Pro.beyord.</p>
                <p className="secondText">Iphone 14 <span className="font-bold">Pro</span></p>
                <p className="thirdText">Created to change everything for the better. for everyone</p>

                <div className="main-button">
                    <button className="shopButton">ShopNow</button>
                </div>

                
            </div>

            <div className="iamge-background">
                <Image className="w-[400px] h-[450px] " src={iphoneImage} alt="Iphone Image"></Image>
            </div>
        </div>
        
    );
}
