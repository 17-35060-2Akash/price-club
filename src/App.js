import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentsMarks from './components/AssignmentsMarks/AssignmentsMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-5xl font-bold underline'>Pricing</h1>
      <Pricing></Pricing>
      <AssignmentsMarks></AssignmentsMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
