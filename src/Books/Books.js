import React, { useEffect } from "react";
import { observer } from "mobx-react";
import bookController from "./Books.ctrl";
import Book from "./Book";
import { Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";


const Books = observer(()  => {

    useEffect(() => { 
      bookController.load();
    }, [])
  
    return (
      <Grid container  spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center" >
        <Grid item>
        <Typography variant="h5" gutterBottom>
            Your books: {bookController?.books$.length}
        </Typography>
        </Grid>

        <Grid item>
           <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="false"
                name="radio-buttons-group"
            >
            <FormControlLabel value="false" onChange={() => bookController.load(false)} control={<Radio />} label="Public" />
            <FormControlLabel value="true" onChange={() => bookController.load(true)} control={<Radio />} label="Private" />
            </RadioGroup>
         </Grid>

        <Grid  
            container   
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
        >
          {bookController?.books$.map((book, i) => (
           <Grid item xs={3}>
            <Book author={book.author} name={book.name} key={i}/>
           </Grid>
          ))}
        </Grid>
        <Grid item>
        <Button
          variant="contained"
          onClick={() => bookController?.addBook({name: Date.now(), author: Date.now()})}
        >
          Add
        </Button>
        </Grid>
      </Grid>
    );
  })

  export default Books;