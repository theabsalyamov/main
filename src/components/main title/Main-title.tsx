import styles from './Main-title.module.css'

export const MainTitle = ({children}: {children: string}) => {
  return(
    <h2 className={styles.title}>{children}</h2>
  )
}