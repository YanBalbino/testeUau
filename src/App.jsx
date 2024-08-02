import Button from "./Button.jsx"
import {nomesCharles} from "./Button.jsx";
function App() {
  
  return (
    <>
      <header id="header">
        <h1>Qual o apelido da vez?</h1>
        <h2>Atualmente, existem {nomesCharles.length} apelidos registrados.</h2>
      </header>
      
      <Button></Button>

      <label>&copy;Yan Balbino - {new Date().getFullYear()}</label>
    </>
  );

}

export default App
