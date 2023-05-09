
import './App.css';
import Form from './Form';
import background from "./img/background.jpg";

function App() {

  return (
    <body className="body element" >
      <div style={{ backgroundImage: `url("${background}")` }}>
        <Form />
      </div>
    </body >
  );
};




export default App;
