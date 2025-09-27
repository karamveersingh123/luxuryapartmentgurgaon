import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewLaunchProjects from "./components/homedetails/NewLaunchProjects";
import HomeBanner from "./components/homedetails/HomeBanner";
import FeaturedProjects from "./components/homedetails/FeaturedProjects";
import HandpickedCollection from "./components/homedetails/HandpickedCollection";
import TouchBanner from "./components/homedetails/TouchBanner";
import CompleteServices from "./components/homedetails/CompleteServices";
import WhyChoose from "./components/homedetails/WhyChoose";


export default function Home() {
  return (
    <>
<Header/>
<HomeBanner/>
<NewLaunchProjects/>
<FeaturedProjects/>
<HandpickedCollection/>
<TouchBanner/>
<CompleteServices/>
<WhyChoose/>
    </>
  );
}
