import './styled/Categorias.css';

function Categorias() {
  return (
    <div className="p-4 mb-4 categorias">   
      <div className="flex space-x-4">
        <ul className="flex">
          <li><span className='active'>Todos</span></li>
          <li><span>Design</span></li>
          <li><span>Casa</span></li>
          <li><span>Receitas</span></li>
          <li><span>Prompts</span></li>
          <li><span>RPG</span></li>
          <li><span>Ilustração</span></li>
          <li><span>Fotografia</span></li>
          <li><span>Fashion</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Categorias;
