import React from 'react'
import styles from "./Footer.module.css";
import logo from '../../../image/footer-logo.svg'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <a className={styles.logo} href="#"><img src={logo} alt="logo" /></a>
          <div className={styles.menu}>
            <h3>Информация</h3>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Галерея</a></li>
              <li><a href="#">Проекты</a></li>
              <li><a href="#">Сертификаты</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <ul>
              <li><a href="#">100000, Республика  Казахстан, г. Караганда, ул. Телевизионная 10</a></li>
              <li><a href="tel:+77017776811">+7 (701) 77 76 811</a></li>
              <li><a href="mailto:galym.sultanov@mail.ru">Galym.sultanov@mail.ru</a></li>
            </ul>
          </div>
          <div className={styles.social}>
            <h3>Социальные сети</h3>
            <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <div className={styles.container}>
        <div className={styles.rights_text}><p>© 2019 Digital Project. Все права защищены.</p></div>
        </div>
      </div>
    </footer>
  )
}

