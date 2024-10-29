import { useEffect, useState } from "react";
import styles from "./Collection.module.css";
import Card from "./Cards";
import lineImg from '../assets/vector.svg';
interface DataItem {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}
function Collection() {
  const mainColor = styles.white;
  const pStyle = [styles.smallText, styles.white].join(" ");
  //Manejar los productos
  const [allProducts, setAllProducts] = useState(true);
  const handleAllProducts = ()=>{
    setAllProducts(true);
  }
  const handleAvailableProducts = ()=>{
    setAllProducts(false);
  }
  //Guardar datos de la API
  const [dataInfo, setDataInfo] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  //Pedir data a la API
  function search() {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    search();
  }, []);
  return (
    <div className={["d-block text-center"].join(" ")}>
      <div className={styles.widthed}>
        {/* SVG ABSOLUTE */}
        <img src={lineImg} alt="Vector" className={styles.vector}/>

        <h1 className={[styles.mainHeading, mainColor].join(" ")}>
          Our Collection
        </h1>
        <p className={styles.bodyText}>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        {/* Condicionales ternarios para cambiar estilos después */}
        <div className={["d-flex text-center justify-content-center gap-3 align-items-center ",styles.prod].join(" ")}>
          <p className={[allProducts ? styles.chose : '', pStyle].join(" ")}
          onClick={handleAllProducts}
          >All Products</p>
          <p className={[!allProducts ? styles.chose : '', pStyle].join(" ")}
          onClick={handleAvailableProducts}
          >Available Now</p>
        </div>
      </div>

      {/* Cards Components */}
      <div className="mt-3">
        {loading ? (
          <>
            <div className="d-flex justify-content-center gap-2">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <div className="row px-5 mx-lg-5">
            {dataInfo
            .filter((item: DataItem) => allProducts || item.available)
              .map((item: DataItem) => (
              <Card obj={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
