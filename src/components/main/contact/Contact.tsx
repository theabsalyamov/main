import styles from './Contact.module.css'
import { MainTitle } from '../title/Main-title'
import image from '../../../../image/image 12.jpg'


export const Contact = () => {
  const error = 'Error'
  
  return (
    <section className={styles.section}>
        <MainTitle>
          Связаться с нами
        </MainTitle>
      <div className={styles.contact}>
        <div className={styles.contact_container}>
          <div>
            <form action="" className={styles.form}>
              <input className={styles.input} type="text" placeholder='Имя'/>
              <input className={!error ? styles.inputError : styles.input} type="tel" placeholder='Номер телефона' required />
              <input className={!error ? styles.inputError : styles.input} type="email" placeholder='E-mail' required />
              <input className={styles.input} type="text" placeholder='Интересующий товар/услуга'/>
              <textarea className={`${!error ? styles.inputError : styles.input} ${styles.textarea}`} placeholder='Сообщение' required></textarea>
              <div className={styles.text_container}>
                <input type="checkbox" className={styles.checkbox} id="check" name="check" value='yes' />
                <label  className={styles.text} htmlFor='check'>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</label>
              </div>
              <input className={styles.button} type="submit" value="ОТПРАВИТЬ"/>
            </form>
          </div>
        </div>
        <div className={styles.img}>
          <img src={image} alt="contact" />
        </div>
      </div>
    </section>
  )
}
