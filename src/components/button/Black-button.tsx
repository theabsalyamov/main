import styles from "./Black-button.module.css"
import image from "./image/arr2.svg"


export const BlackButton = () => {
  return (
    <>
    <a className={styles.button} href="#">
      <p className={styles.text}>ВСЕ ПРОЕКТЫ</p>
      <img src={image} alt="array" />
    </a>
    </>
  )
}
