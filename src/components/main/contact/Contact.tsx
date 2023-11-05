import styles from './Contact.module.css'
import { MainTitle } from '../title/Main-title'
import image from '../../../../image/image 12.jpg'

export const Contact = () => {

  return (
    <section className={styles.section}>
        <MainTitle>
          Связаться с нами
        </MainTitle>
      <div className={styles.contact}>
        <div className={styles.contact_container}>
          <div>
            <form action="" className={styles.form}>
              <input className={styles.input} type="text" placeholder='Имя' required/>
              <input className={styles.input} type="tel" placeholder='Номер телефона'/>
              <input className={styles.input} type="email" placeholder='E-mail'/>
              <input className={styles.input} type="text" placeholder='Интересующий товар/услуга'/>
              <textarea className={`${styles.input} ${styles.textarea}`} placeholder='Сообщение'></textarea>
              <div className={styles.text_container}>
                <input type="checkbox" className={styles.checkbox} id="check" name="check" value='yes' />
                <label  className={styles.text} htmlFor='check'>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</label>
              </div>
              <input className={styles.button} type="submit" value="ОТПРАВИТЬ"/>
            </form>
          </div>
        </div>
        <div>
          <img src={image} alt="contact" />
        </div>
      </div>
    </section>
  )
}
