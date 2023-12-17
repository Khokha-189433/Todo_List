import logo from './logo.svg';
import './App.css';
import FormRange from 'react-bootstrap/esm/FormRange';
import Todo_List from "./Components/Todo_List"

function App() {
  return(
 <div style={{display:"flex",justifyContent:"center", alignItems:"center", height:"auto" ,marginTop:"120px"  ,marginBottom:"120px"}} >
   <Todo_List />
 </div>
  )
}
export default App;
