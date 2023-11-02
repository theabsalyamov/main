import styles from './Header.module.css'
import logo from './img/logo.svg'

export const Header = () => {
  
  const List = ({children}: {children: string}) => {
    return (
        <li>
          <a className={styles.list} href="#">{children}</a>
        </li>
    )
  }

  return (
    <header className={styles.header}>
    <div className={styles.image}>
      <a href="#">
        <img  src={logo} alt="Logo" />
      </a>
    </div>
    <nav>
      <ul  className={styles.nav}>
        <List>ГЛАВНАЯ</List>
        <List>ГАЛЕРЕЯ</List>
        <List>ПРОЕКТЫ</List>
        <List>СЕРТИФИКАТЫ</List>
        <List>КОНТАКТЫ</List>
      </ul>
    </nav>
    </header>
  )
}