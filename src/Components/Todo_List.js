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
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Arrays_todo=[
 {id :uuidv4()  , title:"Read book" , details:"write or read write or read  " , iscomplite: false },
 {id :uuidv4()  , title:"Read " , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false },
 {id :uuidv4()  , title:"Read B" , details:"write or read write or read " , iscomplite: false }
]


export default function Todo_List() {
  const[inputToDo , setinputToDo ] =useState(Arrays_todo)   
  const[AddinputToDo , setAddinputToDo] =useState("")
let todolistmap =inputToDo.map(e => 
  {
    return( <Todo key={e.id} title={e.title} detail={e.details}  />)
  })
  function handelchengebutton()
  {
    alert("welcome to my web site ")
  }

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
    //   value={alignment}
      exclusive
    //   onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned" style={{color:"  #fac1de"}}> 
        All
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered"  style={{color:"  #fac1de"}}>
       finished
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned"  style={{color:"  #fac1de"}}>
      Unfinished
      </ToggleButton>
    </ToggleButtonGroup>
     {/* end button */}
     {todolistmap}
     {/*INPUT AND + ADD BUTTON  */}
           
     <Grid container  sx={{  margin:"18px 25px "}}  spacing={1}> 
         <Grid  xs={10} fontStyle={{background:"#d3a0f5de"   }}    >
         <TextField
        style={{width:"100%" }}
        id="demo-helper-text-aligned"
        label="Name"
        value={AddinputToDo }
        onChange={(event)=>{
        setAddinputToDo(event.target.value)
        }}
      />
        </Grid> 
        <Grid  xs={2} >  
        <Button variant="contained" endIcon={<SendIcon />} style={{width:"100%" , height:"100%" , background:"#520f80a2" }} onClick={() =>{handelchengebutton()}}  >
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

