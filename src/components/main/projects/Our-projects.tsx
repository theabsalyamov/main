import { MainTitle } from "../title/Main-title";
import styles from "./Our-projects.module.css"
import img1 from "../../../../image/proj1.jpg";
import img2 from "../../../../image/proj2.jpg";
import img3 from "../../../../image/proj3.jpg";
import img4 from "../../../../image/proj4.jpg";
import array from "../../../../image/arrow-2-right-long.svg";

export const OurProjects = () => {
  return (
    <section className={styles.section}>
    <MainTitle>
      Наши проекты
    </MainTitle>
    <div className={styles.image_container}>
      <div className={styles.title_container}>
        <h2 className={styles.image_title}>ДОСУГОВЫЙ ЦЕНТР</h2>
        <a className={styles.image_btn} href="#">
          <p>ПОДРОБНЕЕ</p>
          <img src={array} alt="array" />
        </a>
      </div>
      <div className={styles.image_item}><img src={img1} alt="Здание" /></div>
      <div className={styles.image_item}><img src={img2} alt="Площадка" /></div>
      <div className={styles.image_item}><img src={img3} alt="Квартиры" /></div>
      <div className={styles.image_item}><img src={img4} alt="Сооружение" /></div>
    </div>
        <a href="#" className={styles.button}>ВСЕ ПРОЕКТЫ</a>  
    </section>
  )
};
