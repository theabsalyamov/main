import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <>
      <a className={styles.button} href="#">
        <p className={styles.text}>{props.name}</p>
        <div>
        </div>
      </a>
    </>
  )
}