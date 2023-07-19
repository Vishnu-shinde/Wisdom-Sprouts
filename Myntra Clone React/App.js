// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MainI from './components/MainI.jsx';
import MidnewseC from './components/MidnewseC';
import Mens from './components/Mens';
import Navbar from './components/NavbarT';
import ReactDOM from "react-dom/client";
import { Route,Routes } from 'react-router';
import Middsection from './components/Middsection';
import Womens from './components/Womens';
import Kids from './components/Kids';
import Beauty from './components/Beauty';
// import Reactnav from './components/Reactnav.jsx';
// import Description from './components/Description';
// import Design from './components/Design';
// import Usestate from './components/Usestate';
// import Profile from './components/Profile';
// import Details from './components/Details';
// import Followers from './components/Followers.jsx';
// import Following from './components/Following.jsx';
// import Home from './components/Home.jsx';
// import Reels from './components/Reels.jsx';

function App() {
  return (
    <>
      <Navbar/>

      <Routes> 
        <Route exact path='/main' element={<div><MainI/><MidnewseC/><Middsection/></div>}/>
        <Route exact path='/men' element={(<Mens/>)}/>
        <Route path='/women' element={(<Womens/>)}/>
        <Route path='/kid' element={(<Kids/>)}/>
        <Route path='/beauty' element={(<Beauty/>)}/>
      </Routes>

      <Footer/>


      {/* <Usestate/> */}
      {/* <Reactnav/>
      <Routes>
          <Route path='/reels' element={<Reels/>}/>
          <Route path='/profile' element={<Profile/>}>
            <Route exact path='/profile/details' element={<Details/>}/>
            <Route exact path='/profile/followers' element={<Followers/>}/>
            <Route exact path='/profile/following' element={<Following/>}/>
          </Route>
      </Routes> */}
    </>
  );
}

export default App;
