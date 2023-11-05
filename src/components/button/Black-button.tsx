import styles from "./Black-button.module.css"


export const BlackButton = (props: string) => {
  return (
    <>
    <a className={styles.button} href="#">
      <p className={styles.text}>{props.name}</p>
    </a>
    </>
  )
}
