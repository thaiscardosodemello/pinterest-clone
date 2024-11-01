import './../styled/Categorias.css';

function Categorias() {
  return (
    <div className="flex justify-left mt-4 categorias">
      <ul className="flex p-4">
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
  );
}

export default Categorias;
