import bgImg from './assets/bg-cafe.jpg'
import './App.css';
import Collection from './components/Collection';

function App() {
  return (
    <div className="position relative relativo">
      <img src={bgImg} className='img-fluid'/>
      {/* Main content */}
      <div className="position-relative bg-collection container p-5">
        <Collection/>
      </div>

    </div>
    
  )
}

export default App