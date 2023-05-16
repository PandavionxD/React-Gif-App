import { useState } from "react";
import { AddCategory , GifGrid} from "./";


export const GiftExpert = () => {
  const [categorias, setCategorias] = useState([
    "One Punch Man",
  ]);

  const AgregarCategoria = (newCategory) => {
    const value = newCategory.toLowerCase()
    if (categorias.includes(value))return
    setCategorias([newCategory, ...categorias]);
    
};
  return (
    <>
      <h1>Gifts Expert App - React</h1>

      <AddCategory
        // setCategorias={setCategorias}
        onNewCategory={(value) => AgregarCategoria(value)}
      />

      <ul>
        {categorias.map((categoria,index) => (
            <GifGrid key={categoria} categoria ={categoria}  />
          )
        )}
      </ul>
    </>
  );
};
