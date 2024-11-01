import SideBarNav from '../components/SideBarNav';
import Header from '../components/Header';
import Categorias from '../components/Categorias';
import PinCard from '../components/PinCard';

export function Home() { 

  return (
    <div className="flex h-screen">       
      <SideBarNav />  
      <main className="flex-1 flex flex-col p-4">
        <Header />
        <Categorias />
        <PinCard />
      </main>
    </div>
  )
}

export default Home