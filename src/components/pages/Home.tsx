//import { useState } from "react"

import SideBarNav from './SideBarNav';
import Header from './Header';
import Categorias from './Categorias';
import Main from './Main';

import './../styled/Home.css';

export function Home() { 

  return (
    
    <div className="grid grid-cols-8 grid-rows-5 gap-4 sideBar">
        <div className="row-span-5 ">
          <SideBarNav />
        </div>
        <div className="col-span-7">
          <Header />  
        </div>
        <div className="col-span-7">
          <Categorias /> 
          <Main />
        </div>

    </div>
  )
}

export default Home