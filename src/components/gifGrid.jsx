import { useEffect, useState } from "react";
import { GetGif } from "../helpers/getgifs";
import { GifItemGrid } from "./GridItem";

export const GifGrid = ({ categoria }) => {
  const [imagen, setImagen] = useState([]);

  const getImages = async () => {
    const img = await GetGif(categoria);
    return setImagen(img);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <>
        <h3> {categoria} </h3>

        <div className="card-grid">
          {imagen.map((image) => {
            return <GifItemGrid key={image.id} {...image} />;
          })}
        </div>
      </>
    </div>
  );
};
