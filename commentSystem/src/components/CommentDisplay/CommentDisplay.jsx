import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./CommentDisplay.module.scss";
import { useState } from "react";

export default function CommentDisplay({ buttonClicked, setButtonClicked }) {
  const [commenterName, setName] = useState("");
  const [comment, setComment] = useState("");

  const add = async (event) => {
    event.preventDefault();
    setButtonClicked(!buttonClicked);
    if (commenterName.length > 0 && comment.length > 0) {
      const addComment = { commenterName, comment };
      await fetch("http://localhost:8080/comment/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addComment),
      }).then(() => {
        alert("Comment Added, Thank You");
        console.log("New comment Added");
        setButtonClicked(false);
      });
    } else {
      alert("Please fill out both textfields");
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.CommentDisplay__wrapper}
        onSubmit={add}
      >
        <h1>Submit a comment bellow</h1>
        <div className={styles.textfieldName__wrapper}>
          <TextField
            className={styles.textfieldName}
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            value={commenterName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <br />
        <TextField
          className={styles.textfield}
          id="filled-basic"
          label="Comment"
          variant="filled"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={add}>Submit</button>
      </Box>
    </>
  );
}
