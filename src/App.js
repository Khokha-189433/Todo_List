import './App.css';
import Todo_List from "./Components/Todo_List"
import { ToDoContext } from "./ContextFolder/Context"
import { v4 as uuidv4 } from 'uuid';
import { useState  ,useEffect} from 'react';

const Arrays_todo=[
  {id :uuidv4() ,title:"Read book",details:"write or read write or read", iscomplite: false },
  {id :uuidv4() ,title:"Read "  ,details:"write or read write or read " , iscomplite: false },
  {id :uuidv4() ,title:"Read B" , details:"write or read write or read " , iscomplite: false },
  {id :uuidv4() ,title:"Read B" , details:"write or read write or read " , iscomplite: false }
 ]


function App() {
  const[inputToDo , setinputToDo ] =useState(Arrays_todo) 
    useEffect(() =>{
      let Rereander = JSON.parse(localStorage.getItem("Todos"))
      setinputToDo(Rereander)
      } , [])

  return(
 <div style={{display:"flex",justifyContent:"center", alignItems:"center", height:"auto" ,marginTop:"120px"  ,marginBottom:"120px"}} >
  <ToDoContext.Provider value={{inputToDo ,setinputToDo }}>
     <Todo_List />
   </ToDoContext.Provider>
   {/* *************************************************************** */}

  
 </div>
  )
}
export default App;
