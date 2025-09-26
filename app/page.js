import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewLaunchProjects from "./components/homedetails/NewLaunchProjects";


export default function Home() {
  return (
    <>
<Header/>
<NewLaunchProjects/>
    </>
  );
}
