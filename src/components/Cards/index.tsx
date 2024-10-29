import styles from "./Card.module.css";
import fullStar from "../../assets/Star_fill.svg";
import noStar from "../../assets/Star.svg";

type CardProps = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
};
type Obj = {
  obj: CardProps;
};

function Card({ obj}: Obj) {
  const popular = [
    "position-absolute top-0 start-0 ms-2 mt-2",
    styles.pop,
  ].join(" ");
  const infoCoff = ["fw-semibold", styles.white,styles.nameSize].join(" ");

  return (
    <div key={obj.id} className="col-lg-4 col-md-6 mb-5">
      {/* Imágen */}
      <div className="position-relative mb-2">
        <img
          src={obj.image}
          alt={obj.name}
          className={["img-fluid w-100", styles.borderImg].join(" ")}
        />
        <small className={obj.popular ? popular : "d-none"}>Popular</small>
      </div>

      {/* Info */}
      <div className="d-flex justify-content-between align-self-center">
        <div>
          <p className={infoCoff}>{obj.name}</p>
        </div>
        <div>
          <small className={styles.price}>{obj.price}</small>
        </div>
      </div>

      {/* Stars and votes */}
      <div className="d-flex gap-1 align-items-center justify-content-between ">
        <div className="d-flex align-self-center gap-1">
          <div>
            <img src={obj.rating > 0 ? fullStar : noStar} alt="star" className={styles.star}/>
          </div>
          <div>
            <p className={[styles.white, styles.votes].join(" ")}>
              {obj.rating < 1 ? "" : obj.rating}
              <span className={styles.span}>
                {obj.rating > 0 ? ` (${obj.votes} votes)` : "  No ratings"}
              </span>
            </p>
          </div>
        </div>
        {/* IF SOLD OUT */}
        <div>
          <p className={styles.soldOut}>{obj.available ? "" : "Sold out"}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
