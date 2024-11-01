
import { FaPinterest, FaCompass, FaPlus, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

function SideBarNavigation() {
  return (
    <aside className="flex-none bg-white flex flex-col justify-between p-8">
      <div className="flex items-center justify-center mb-8">
        <FaPinterest size={30} color="#e60023" title="Logo do Pinterest" className='mb-50px'/>
        <h1 className="text-xl font-bold ml-2"></h1>
      </div>

      <nav className="flex flex-col">
        <ul className="space-y-4">
          <li className="flex items-center justify-center">
            <FaCompass size={25} className="mr-2" title="Explorar" />
          </li>
          <li className="flex items-center justify-center">
            <FaPlus size={25} className="mr-2" title="Criar" />
          </li>
          <li className="flex items-center justify-center">
            <FaBell size={25} className="mr-2" title="Atualizações" />
          </li>
          <li className="flex items-center justify-center">
            <FaEnvelope size={25} className="mr-2" title="Mensagens" />
          </li>
        </ul>
      </nav>

      <div className="mt-auto flex items-center justify-center">
        <FaCog size={25} className="mr-2" title="Congigurações" />
      </div>
    </aside>
  );
}

export default SideBarNavigation;
