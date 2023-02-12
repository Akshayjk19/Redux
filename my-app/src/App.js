import logo from './logo.svg';
import './App.css';
import Secondpage from './Secondpage';
import { Counter } from './Home';
import Calci from './Calci';
import AnotherFunction from './AnotherFunction';
import IncreDecre from './IncreDecre';


function App() {
  return (
    <div >
    <Counter/>
  <IncreDecre/>

    
    <Secondpage/>
    <Calci/>
    <AnotherFunction/>
     
    </div>
  );
}

export default App;
