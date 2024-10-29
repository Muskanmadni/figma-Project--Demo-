import { Header } from "@/components/header";
import { Home } from "@/components/homepage";
import { AirpodCard, BottomBanner, Category, HomepageProducts, HomepageShopCard, MacCard, PlaystationCard, ProductsBanners, VisionCard } from "@/components/cards";
import { Footer } from "@/components/footer";
export default function home(){
  return(
    <div>
      <Header/>
      <Home/>
      <MacCard/>
      <PlaystationCard/>
      <AirpodCard/>
      <VisionCard/>
      <Category/>
      <HomepageProducts/>
      <HomepageShopCard/>
      <ProductsBanners/>
      <BottomBanner/>
      <Footer/>
    </div>
  )
}