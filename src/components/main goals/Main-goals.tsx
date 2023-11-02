import { MainTitle } from "../main title/Main-title";
import image1 from "../main goals/image/main-goals (1).jpg" 
import image2 from "../main goals/image/main-goals (2).jpg" 
import image3 from "../main goals/image/main-goals (3).jpg" 
import styles from "../main goals/Main-goals.module.css"
import {Button} from "../button/Button"

export const MainGoals = () => {
  return (
    <>
    <section>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.image_container}>
          <img src={image2} alt="Картинка" />
          </div>
          <div className={styles.image_container}>
          <img src={image1} alt="Картинка" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content_image}>
          <img src={image3} alt="Картинка" />
          </div>
          <div>
            <MainTitle>
              О компании
            </MainTitle>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Button/>
          </div>
        </div>    
      </div>
    </section>
    </>
  )
}