import './App.css';
import Container from './components/Container';

import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';

function App() {
  return (
    <div className="App">
     <h2>Hello</h2>
     <FirstComponent/>
     <br/>
     <Images/>
     <Hooks/>
     <List/>
     <RenderCond x={10} y={"Guido"}/>
     <Fragment/>
     <Container>
       <h1>Este é filho do Container</h1>
     </Container>
    </div>
  );
}

export default App;
