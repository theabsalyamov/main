import styles from "./Main-tasks.module.css"
import { MainTitle } from "../title/Main-title";



export const MainTasks = () => {
  return (
    <section className={styles.section}>
      <MainTitle>Основные задачи</MainTitle>
      <div className={styles.content}>
        <div className={styles.text_conten1}>
          <h3 className={styles.title}>1</h3>
          <p className={styles.text}>Создание комфортных условий и повышение качества обслуживания клиентов</p>
        </div>
        <div className={styles.text_conten2}>
          <h3 className={styles.title}>2</h3>
          <p className={styles.text}>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</p>
        </div>
      </div>
    </section>
  )
}
