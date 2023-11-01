import styles from './Header.module.css'
import logo from './img/logo.svg'

export const Header = () => {
  
  const List = (props) => {
    return (
        <li className={styles.list}>
          <a className="nav_link" href="#">{props.name}</a>
        </li>
    )
  }

  return (
    <header className={styles.header}>
    <div>
      <a href="#">
        <img  src={logo} alt="Logo" />
      </a>
    </div>
    <nav>
      <ul  className={styles.nav}>
        <List name={"ГЛАВНАЯ"}/>
        <List name={"ГАЛЕРЕЯ"}/>
        <List name={"ПРОЕКТЫ"}/>
        <List name={"СЕРТИФИКАТЫ"}/>
        <List name={"КОНТАКТЫ"}/>
      </ul>
    </nav>
    </header>
  )
}