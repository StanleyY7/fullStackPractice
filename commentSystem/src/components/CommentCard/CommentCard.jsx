import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./CommentCard.module.scss";
import { useState, useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CommentCard({ buttonClicked }) {
  const [getComment, setGetComment] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch("http://localhost:8080/comment/getAll");
        const data = await response.json();
        console.log(data);
        setGetComment(data);
      } catch {
        console.log(Error);
      }
    };
    get();
  }, [buttonClicked]);

  return (
    <>
      <div>
        {getComment &&
          getComment.map((item) => {
            return (
              <Card
                sx={{ minWidth: 275 }}
                key={item.id}
                className={styles.CommentCard}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Comment by {item.commenterName}
                  </Typography>

                  <Typography variant="body2">
                    {item.comment}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        ;
      </div>
    </>
  );
}
