import Image from "next/image";
import socialLogo from"@/components/images/Social Icons.png";
import footerLogo from "@/components/images/Logo.png"

export function Footer(){
    return(
        <div className="footer">


        <div className="footerIcons">

            <ul className="footer-Icons-class">
                <li className="font-bold">Services</li>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
            </ul>
        </div>
        <div className="footer-logo">
            <p className="footer-logo-class">Cyber</p>
        </div> 
        <div className="footer-text">
            <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className="footer-links-logo">
            <Image src={socialLogo} alt="social logo"></Image>
        </div>
       
    </div>
    );
    
}