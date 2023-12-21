import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import VerifiedIcon from '@mui/icons-material/Verified';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Container from '@mui/material/Container';
//dialoge ////////////////////////////////////////////////////
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState  , useContext } from 'react';
import { ToDoContext } from "../ContextFolder/Context"
import TextField from '@mui/material/TextField';

export default function Todo({todoObject})
{
  const {inputToDo ,setinputToDo }= useContext(ToDoContext)

  // delet buuton /////////////////////////////////////////////////////
   const [showdeletaleart ,sethowdeletaleart ] =useState(false) ;   // to delet  task
   const[updatedtask ,setupdatedtask] = useState(false)             // to edit task
   const [updatetodo,setupdatetodo] =useState({titles:" " ,details:" "})  

    function handelDeletbuttion()     // while clicked delet_name  لget up delet task
    {
      sethowdeletaleart(true)
    }
    function closealert()     /// if click anyway in creen close alert
    {
      sethowdeletaleart(false)
    }

    function  handelDeletTask()   // function for delet task 
    { 
      const delettask =inputToDo.filter((t)=> {
        if( t.id === todoObject.id)
        {
          return false
        }
        else{
          return true ;
        }
      })
      setinputToDo(delettask)
      localStorage.setItem("Todos" ,JSON.stringify(delettask))
    }
  //  //  end delet buuton


  //****************Checked button isComplited***************************** */
   //// function to knows id input 
  
    function handelchecedinput()            // checed is completed a task
    {
      const IsCompletedTask= inputToDo.map((eventId)=>{
        if(eventId.id ===  todoObject.id)
        {
         
          eventId.iscomplite = !eventId.iscomplite  
        }
        return eventId ; 
       })
      setinputToDo(IsCompletedTask)  
      localStorage.setItem("Todos" ,JSON.stringify(IsCompletedTask))
      }
      ///////////////////////////////

      // **********************ubdated task************************************///
      function udatetaskcliceopen()
      {
        setupdatedtask(true)   // to open 
      }
      function udatetaskclosSecren()
      {
        setupdatedtask(false)    // to close
      }

      function  handelUbdatedTask()   // function for delet task 
      {
       const Updated = inputToDo.map((event)=>{
        if(event.id === todoObject.id)
        {
         return ({...event , title:updatetodo.titles , details:updatetodo.details }) 
        }
        else{
         return (event)
        }
        
       })
       setinputToDo(Updated)
       localStorage.setItem("Todos" ,JSON.stringify(Updated))
      
       setupdatedtask(false)
      }


      // *************************end *************************************/
    return(
        <>
        {/* **************************delet task******************************* */}
      <Dialog
        onClose={closealert}
        open={showdeletaleart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete  this task ? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
           you cant undo this action 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closealert}>Disagree</Button>
          <Button  autoFocus onClick={handelDeletTask}>
            Yse I`m Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* **********************Dialoge add ***************************** */}
        
      <Dialog
        onClose={udatetaskclosSecren}
        open={updatedtask}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete  this task ? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          you cant undo this action 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="write Task title"
            type="Title"
            fullWidth
            variant="standard"
            value={updatetodo.titles}
            onChange={(event)=>{
            setupdatetodo({...updatetodo,titles:event.target.value })
            }}
         

          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="write Task Details"
            // type='Title'
            fullWidth
            variant="standard"
            value={updatetodo.details}
            onChange={(event)=>{
            setupdatetodo({...updatetodo, details:event.target.value })
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={udatetaskclosSecren}>Cancel</Button>
          <Button  autoFocus onClick={handelUbdatedTask} >
           Task Edit 
          </Button>
        </DialogActions>
      </Dialog>
           

        {/*  ****************************************************************/}
    <Container >
     <Card sx={{  marginTop:"10px"  ,marginBottom:"19px"  }} className='todoCard '>
      <CardContent>
      <Grid container spacing={13}   >
        <Grid xs={8} fontStyle={{background:"#e2b6ffff"  }} >
        <Typography sx={{ fontSize: 25 ,textAlign:"left"   }} color="text.secondary"  style={{color:"  #a755aa"}} gutterBottom>
          {todoObject.title}
        </Typography>
        <Typography sx={{ fontSize: 16 ,textAlign:"left"   }} style={{color:"  #8f228afa"}}color="text.secondary" gutterBottom>
          {todoObject.details}
        </Typography>
        </Grid>
        <Grid  xs={4} fontStyle={{background:"#e2b6ff"}}>
  
       {/* /////////////////////////////////////////// */}
       <IconButton aria-label="delete"
          style={{
            color: todoObject.iscomplite ? "#592596 " : "#470f6d " , 
            background: todoObject.iscomplite ? "#8c59c5 " : "#fca8fc" ,
            border:"solid #8d79a7 3px",
           }}
           className='IconButton'
           onClick={() => {
            handelchecedinput()
           }}
       >
          <VerifiedIcon />
       </IconButton>
       {/* /////////////////////////////////////////// */}
           
      <IconButton aria-label="delete" 
      style={{
      color:"#934ac3",
      background:"white",
      border:"solid #8d79a7 3px" ,
      
      }}
      className='IconButton'
      onClick={()=>{
        handelDeletbuttion()
      }}
      >
      <DeleteIcon  />
      </IconButton>
       {/* /////////////////////////////////////////// */}
      <IconButton aria-label="delete"
      style={{
        color:"#934ac3",
        background:"white",
        border:"solid #8d79a7 3px",
        }}
        className='IconButton'
        onClick={()=>{
          udatetaskcliceopen()
        } }
      >
        <BorderColorOutlinedIcon />
      </IconButton>
        </Grid>  
      </Grid>
      </CardContent>
    </Card>
    </Container>      
        
        
        
        </>
    )
}