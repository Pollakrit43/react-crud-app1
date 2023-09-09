import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function UserUpdate() {
    
    
    const {id} = useParams();

    useEffect(() => {
        getUserById()
       
    }, [id]);


    const getUserById = async ()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
           }
           
           let response = await fetch("https://www.melivecode.com/api/users/"+id, { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data);
           if(data.status === 'ok'){
                setFname(data['user']['fname'])
                setLname(data['user']['lname'])
                setUserName(data['user']['username'])
                setEmail(data['user']['email'])
                setAvatar(data['user']['avatar'])
           }
           
    }




  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault()
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
        'id':id,
         "fname": fname,
         "lname": lname,
         "username": username,
         "email": email,
         "avatar": avatar
       });
       
       let response = await fetch("https://www.melivecode.com/api/users/update", { 
         method: "PUT",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       if (data.status === "ok") {
        alert(data.message);
        window.location.href = '/'
      }      
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Typography component="div">
          <Box sx={{ fontSize: "h6.fontSize", m: 1 }}>Update User</Box>
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="fname"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="lname"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setLname(e.target.value)}
                value={lname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="avatar"
                label="Avatar"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
