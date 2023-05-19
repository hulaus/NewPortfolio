import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import WebFooter from './components/WebFooter';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <>
    <div className='App'>
      <div className='navbar-wrapper'>
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <TopSection />
      </div>
      <div>
        <SkillsPage />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div className='footer-wrapper'>
      <footer>
        <WebFooter />
      </footer>
      </div>
    </div>
    </>
  );
}

export default App;
