import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Todo from './Todo';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { useState ,useContext  } from 'react';
import { ToDoContext } from "../ContextFolder/Context"
import { v4 as uuidv4 } from 'uuid';


export default function Todo_List() {
  // const [inpu]
 
  const {inputToDo ,setinputToDo }= useContext(ToDoContext);
  const[AddinputToDo , setAddinputToDo] =useState("") ;
  const [addtodFinadhed ,setaddtodFinadhed]=useState("all")

  const iscomplite_A = inputToDo.filter((t)=> {
    return t.iscomplite 
     })

  const non_iscomplite_A = inputToDo.filter((t)=> {
    return !t.iscomplite 
      })

   let TransferCompletedTasks = inputToDo ;
  if(addtodFinadhed === "Complated" )
  {
    TransferCompletedTasks = iscomplite_A ;
  }
   else if(addtodFinadhed === "non-Complated")
   {
    TransferCompletedTasks = non_iscomplite_A ;
   }
   else{
       TransferCompletedTasks = inputToDo ;
   }
   let todolistmap =TransferCompletedTasks.map(event => 
    {
      return( <Todo key={event.id} todoObject={event}  />)
    })

  function showisComplitade(t)
  {
    setaddtodFinadhed(t.target.value)
  }

 
 
 
  /////////// function to add component todo_list
  function handelchengebutton()   
  {
    const addobjectinputs =
    {
       id : uuidv4() ,
       title :AddinputToDo,
       details: "",
       iscomplite: false
    }
 
  const TodoArrya=[...inputToDo ,addobjectinputs]   
  setinputToDo(TodoArrya)
  setAddinputToDo("")
  localStorage.setItem("Todos" ,JSON.stringify(TodoArrya)) // to save value whene reload
}

// **********************************


const card = (
  <React.Fragment>
    <CardContent  >
      <Typography  variant="h3" color="text.secondary" gutterBottom  
      style={ {display:"flex" ,justifyContent:"center" , alignContent:"center"  , color:"  #fac1de"}} className='todoAddress' >
        My tasks
      </Typography>
      <Divider />
     {/* button  */}
     <ToggleButtonGroup 
      style={{display:"flex" ,justifyContent:"center" , alignContent:"center" }}
      value={addtodFinadhed}
      onChange={showisComplitade}
      exclusive
    //   onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="all" aria-label="left aligned" style={{color:"  #fac1de"}}> 
        All
      </ToggleButton>
      <ToggleButton value="Complated" aria-label="centered"  style={{color:"  #fac1de"}}>
       finished
      </ToggleButton>
      <ToggleButton value="non-Complated" aria-label="right aligned"  style={{color:"  #fac1de"}}>
      Unfinished
      </ToggleButton>
    </ToggleButtonGroup>
     {/* end button */}
     {todolistmap}
     {/*INPUT AND + ADD BUTTON  */}
           
     <Grid container  sx={{  margin:"18px 25px "}}  spacing={1}> 
        <Grid  xs={8} fontStyle={{background:"#d3a0f5de"   }}    >
         <TextField
        style={{width:"100%"}}
        id="demo-helper-text-aligned"
        label="Name"
        value={AddinputToDo}
        onChange={(event)=>{
        setAddinputToDo(event.target.value)
        }}
        />
    
        </Grid> 
        <Grid  xs={4}  >  
        <Button variant="contained" endIcon={<SendIcon />} style={{width:"100%" , height:"100%" , background:"#830a7dc0" }} onClick={() =>{handelchengebutton()}}  >
         addition
        </Button>
        </Grid> 
       </Grid> 
      
     {/*   =====================================================      */}
    </CardContent>
  </React.Fragment>
);

 

  return (
     <Container maxWidth="lg"  height="auto" >
       <CssBaseline />
      <Box sx={{ minWidth: 275 , borderRadius:"120px" }}  >
      <Card variant="outlined"   sx={{ minWidth: 275 , borderRadius:"30px  0px", background:"#8b46b9a2" }}>{card}</Card>
      </Box>
     </Container> 
  
  );
}

