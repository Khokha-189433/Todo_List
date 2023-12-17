import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import VerifiedIcon from '@mui/icons-material/Verified';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Container from '@mui/material/Container';

export default function Todo({title , detail})
{
    return(
        <>
    <Container >
     <Card sx={{  marginTop:"10px"  ,marginBottom:"19px"  }} className='todoCard '>
      <CardContent>
      <Grid container spacing={13}   >
        <Grid xs={8} fontStyle={{background:"#e2b6ffff"  }} >
        <Typography sx={{ fontSize: 25 ,textAlign:"left"   }} color="text.secondary"  style={{color:"  #a755aa"}} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 16 ,textAlign:"left"   }} style={{color:"  #8f228afa"}}color="text.secondary" gutterBottom>
          {detail}
        </Typography>
        </Grid>
        <Grid  xs={4} fontStyle={{background:"#e2b6ff"}}>
        <IconButton aria-label="delete" 
         style={{
          color:"#934ac3",
          background:"white",
          border:"solid #8d79a7 3px" ,
         
         }}
         className='IconButton'
        >
          <DeleteIcon  />
       </IconButton>
       <IconButton aria-label="delete"
          style={{
            color:"#934ac3",
            background:"white",
            border:"solid #8d79a7 3px",
           }}
           className='IconButton'
       >
          <VerifiedIcon />
       </IconButton>
       <IconButton aria-label="delete"
        style={{
          color:"#934ac3",
          background:"white",
          border:"solid #8d79a7 3px",
         }}
         className='IconButton'
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