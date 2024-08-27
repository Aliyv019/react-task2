import './App.css';
import CardContainer from './components/Card/CardContainer'
import Input from './components/Input/input.jsx'


function App() {
  
  const info={
    name:"Miri",
    age:25,
    profession:"Motivator"
  }
  return (
    <div className="App">
        <Input />
        <CardContainer data={info} />
    </div>
  );
}

export default App;
