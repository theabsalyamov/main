import './App.css'
import { Header } from "./components/header/Header";
import { MainGoals } from "./components/main/goals/Main-goals";
import { MainTasks } from "./components/main/tasks/Main-tasks";
import { OurProjects } from "./components/main/projects/Our-projects";
import { Contact } from "./components/main/contact/Contact";

function App() {

  return (
    <>
    <Header/>
    <MainGoals/>
    <MainTasks/>
    <OurProjects/>
    <Contact/>
    </>
  )
}

export default App
