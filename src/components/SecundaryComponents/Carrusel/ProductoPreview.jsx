/* eslint-disable react/prop-types */
import styles from "./P.module.css"

//_________________________module_________________________
function ProductoPreview ({  title, description, imageURL,rating,precio}) {





    //component:
    return (
        <div className={styles.component}>
            <div className={styles.container1}>
                <p className={styles.title}>{title}</p>
                <h2 className={styles.description}>{description}</h2>
                <h3>{precio} USD</h3>
            </div>
            <div className={styles.container2}>
                <img src={imageURL} alt="sample45" /> 
                <p>{rating}</p>

            
            </div>
        </div>
    );
}

export default ProductoPreview;
