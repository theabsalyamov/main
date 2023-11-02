import array from './image/arrow-2-right-long.svg'
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <>
      <a className={styles.button} href="#">
        <p className={styles.text}>ЧИТАТЬ</p>
        <div>
          <img src={array} alt="Array" />
        </div>
      </a>
    </>
  )
}