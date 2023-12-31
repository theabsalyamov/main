import { MainTitle } from "../title/Main-title";
import image1 from "../../../../image/goals1.jpg" 
import image2 from "../../../../image/goals2.jpg" 
import image3 from "../../../../image/goals3.jpg" 
import styles from "./Main-goals.module.css"

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
              <a href="#" className={styles.button}>ЧИТАТЬ</a>
          </div>
        </div>    
      </div>
    </section>
    </>
  )
}