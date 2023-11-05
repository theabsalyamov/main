import './App.css'
import { Header } from "./components/header/Header";
import { MainGoals } from "./components/main/goals/Main-goals";
import { MainTasks } from "./components/main/tasks/Main-tasks";
import { OurProjects } from "./components/main/projects/Our-projects";
import { Contact } from "./components/main/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <>
    <div className='container'>
    <Header/>
    <MainGoals/>
    <MainTasks/>
    <OurProjects/>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App
