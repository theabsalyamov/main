import './App.css'
import { MainGoals } from "./components/main/goals/Main-goals";
import { MainTasks } from "./components/main/tasks/Main-tasks";
import { OurProjects } from "./components/main/projects/Our-projects";
import { Contact } from "./components/main/contact/Contact";
import { Layout } from "./components/main/layout/Layout";

function App() {
  // const [data, loading] = useMyHook()

  // if (loading) {
  //   return <div>Загрузка...</div>
  // }

  return (

    <Layout>
        <MainGoals/>
        <MainTasks/>
        <OurProjects/>
        <Contact/>
    </Layout>

    // <div>
    //   {data.map(({title, body, id, userId}) => <div key={id}>{title}</div>)}
    // </div>
  )
}

export default App
