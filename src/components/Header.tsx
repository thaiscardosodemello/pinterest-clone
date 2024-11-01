import { FaSearch, FaChevronDown } from 'react-icons/fa';

function Header() {
  return (
  <header className="p-4 mb-4 grid grid-cols-3 items-center">
    <div className="w-full flex items-center">
      <form className="flex w-full">
        <button className="rounded-l-lg p-3 bg-slate-100 focus:bg-slate-200 transition duration-200">
          <FaSearch style={{ color: '#8b8b8b' }} title="Pesquisar" />
        </button>
        <input
          type="search"
          placeholder="Pesquisar"
          className="rounded-r-lg border-secondary-border py-1 px-4 text-lg bg-slate-100 w-full focus:border-gray-700 outline-none hover:bg-slate-200 transition duration-200"
        />
      </form>
    </div>
    <div className="flex items-center px-8">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocLuHazHpLHZohjcOCRUn1UpR9RSkMHCtOJDvIrveZlvTLgiqg4m=s288-c-no" 
        alt="Avatar"
        width={40}
        className="rounded-full"
      />
      <FaChevronDown className="ml-2 text-gray-500" />
    </div>
  </header>
  );
}
      
export default Header;
