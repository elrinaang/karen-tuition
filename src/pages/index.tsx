
import AboutUs from '@/components/AboutUs';
import Courses from '@/components/Courses';
import Button from '@mui/material/Button';
import NavBar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <NavBar/>
      <Courses/>
      <AboutUs/>
    </>
  )
}
