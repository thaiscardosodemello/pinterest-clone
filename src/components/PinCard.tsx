//import './../styled/pinCard.css';

function PinCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 flex-1">
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/a0/ef/4e/a0ef4eefcf92c48d9355684c31e373c2.jpg" alt="Card 1" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 1</h4>
        </div>
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/3b/37/c0/3b37c0866bceddf082f3513ac6d428f3.jpg" alt="Card 2" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 2</h4>
        </div>
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/61/c5/0a/61c50a0f26e24d47ab4178a6e07ab93e.jpg" alt="Card 3" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 3</h4>
        </div>
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/69/58/f1/6958f129491892a8cc426ad2c797dc4f.jpg" alt="Card 4" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 4</h4>
        </div>
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/41/a9/f6/41a9f6a9bcb98103f1c0492b50eb65f7.jpg" alt="Card 5" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 5</h4>
        </div>
        <div className="p-4">
            <img src="https://i.pinimg.com/564x/aa/a5/4a/aaa54a5c0c7d7c805ad036a783b434bb.jpg" alt="Card 6" className="rounded-[28px] w-[250]" />
            <h4 className="mt-2">Título do Card 6</h4>
        </div>
    </div>

  );
}

export default PinCard;
