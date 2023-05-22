import './App.css';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import Education from './components/WebFooter';
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
        <Education />
      </footer>
      </div>
    </div>
    </>
  );
}

export default App;
