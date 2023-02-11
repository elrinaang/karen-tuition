
import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Courses from '@/components/Courses';
import NavBar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <Courses/>
    </>
  )
}
