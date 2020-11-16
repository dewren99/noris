import './App.css';
import Navbar from './comps/Navbar/Navbar';
import CompanyPage from './pages/CompanyPage/CompanyPage.js';
import EducationalExperience from './pages/EducationalExperience/EducationalExperience.js';
import History from './pages/History/History.js';
import Team from './pages/Team/Team';
import Location from './pages/Location/Location';
import Footer from './pages/Footer/Footer';
import DataVisualization from './pages/DataVisualization/DataVisualization.js';

export default function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <CompanyPage/>
      <EducationalExperience/>
      <History/>
      <Team/>
      <Location/>
      <Footer/> */}
      <DataVisualization/>
    </div>
  );
}


