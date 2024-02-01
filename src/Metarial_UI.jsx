
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Fingerprint from '@mui/icons-material/Fingerprint';

import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';

export default function Metarial_UI(){
    
        let sendData = ()=>{
          console.log("data was send");
        }
    return ( <div>
<h1>Material UI Demo</h1>
     <Button variant="text" disabled>click me!!</Button><br /> <br />
     <Button variant="contained" color="secondary" size='small'>follow me!!</Button> <br /><br />
     <Button variant="outlined" color="error" size="large">About US</Button> <br /><br />

     <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br /><br />
      <Button variant="contained" endIcon={<SendIcon />} onClick={sendData}>
        Send
      </Button>
      <br /><br />
      <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>

      <br /><br />
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
      <br /> <br />
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <br /><br /><br />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br /><br /><br />
      <TextField fullWidth label="fullWidth" id="fullWidth" /> 

     
    </div> );
}