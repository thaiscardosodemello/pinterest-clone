import { FaSearch, FaChevronDown } from 'react-icons/fa';

function Header() {
  return (
    <header className="grid grid-cols-7 grid-rows-5 gap-4 p-4">
      <div className="col-span-6">
        <form className='flex w-full'>
          <button className="rounded-l-lg p-3 bg-slate-100">
            <FaSearch style={{color: '#8b8b8b'}} title="Pesquisar" />
          </button>
          <input
            type="Search"
            placeholder="Pesquisar"
            className="rounded-r-lg border-secondary-border py-1 px-4 text-lg bg-slate-100 w-full focus:border-gray-700 outline-none"
          />
        </form>
      </div>

      <div className="col-start-7">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="rounded-full w-10 h-10 mr-2"
          />
        </div>
        <div className="flex items-center">
          <FaChevronDown className="text-gray-700 cursor-pointer" />
        </div>
      </div>
      
      

      
    </header>
  );
}

export default Header;
