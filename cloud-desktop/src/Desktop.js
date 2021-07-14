import './Desktop.css';
import Clock from './components/Clock'

function App() {
  return (
    <>
      <div className="desktop">

      </div>
      <div className="taskbar">
          <Clock className="taskbar-item"/>
      </div>
    </>
  );
}

export default App;
