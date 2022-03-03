import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Flashcard from './Flashcard';
import Container from './Container';
import Todo from './Todo';


function App() {

  return (
    <div className="app">
      <Container header = 'Counter'>
        <Counter />
      </Container>

      <Container header = 'Flashcard'>
        <Flashcard question='Question: what does the color red+blue create?' answer='Answer: purple' />
        <Flashcard question='Question: what does the color yellow+blue create?' answer='Answer: green' />
      </Container>

      <Container header = 'ToDo'>
        <Todo name='camping todo' initialTodo={[{id:1, todo: 'learn js', completed:true}]} />
        <Todo name='camping todo' initialTodo={[{id:1, todo: 'learn ruby', completed:false}]} />
      </Container>
    </div>
    
  );
}


export default App;
