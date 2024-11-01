import {
  FaPinterest,
  FaCompass,
  FaPlus,
  FaBell,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";
import "./../components/styled/SideBarNavigation.css";
import { useCounter } from "../hook/useCounter";
import NotificationBadge from "./NotificationBadge";

function SideBarNavigation() {
  const { count: notificacoes, increment: incrementNotificacoes } =
    useCounter();
  const { count: mensagens, increment: incrementMensagens } = useCounter();

  return (
    <nav className="w-[100px] h-full flex flex-col border-r-2 border-r-gray-100 justify-between">
      <div>
        <div className="items-center justify-center p-8 mb-10">
          <FaPinterest size={25} color="#e60023" title="Logo do Pinterest" />
        </div>
        <ul className="flex-col items-center">
          <li className="items-center px-8">
            <FaCompass size={25} title="Explorar" />
            <span>Explorar</span>
          </li>
          <li className="items-center px-8">
            <FaPlus size={25} title="Criar" />
            <span>Criar</span>
          </li>
          <li className="items-center px-8">
            <div className="relative">
              <FaBell
                size={25}
                title="Atualizações"
                onClick={incrementNotificacoes}
              />
              <NotificationBadge count={notificacoes} />
              <span>Atualizações</span>
            </div>
          </li>
          <li className="items-center px-8">
            <div className="relative">
              <FaEnvelope
                size={25}
                title="Mensagens"
                onClick={incrementMensagens}
              />
              <NotificationBadge count={mensagens} />
              <span>Mensagens</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="fitems-center mt-auto px-8 config">
        <FaCog size={25} title="Configurações" />
        <span>Configurações</span>
      </div>
    </nav>
  );
}

export default SideBarNavigation;
