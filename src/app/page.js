"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Form, Button } from "react-bootstrap";

const pending = "pending";
const wrong = "wrong";
const right = "right";

const rightChoice = ["carlos", "carlos loura"];

export default function Home() {
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState(pending);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // setSubmittedGuess(guess);
    console.log(`Final guess: ${guess}`);
    const finalGuess = guess.toLowerCase();

    if (rightChoice.find((rc) => rc === finalGuess)) {
      setStatus(right);
    } else {
      console.log(`Setting status to ${wrong}`);
      setStatus(wrong);
      setTimeout(() => {
        console.log(`Setting status to ${pending}`);
        setStatus(pending);
      }, 5000);
    }
  };

  return (
    <div>
      {status === pending ? (
        <div className={styles.mainPage}>
          <div className={styles.query}>
            <h3 className={styles.question}>Quem será o meu amigo secreto?</h3>
            <Form onSubmit={handleSubmit} className={styles.formStyle}>
              <Form.Control
                onChange={(event) => setGuess(event.target.value)}
                type="text"
                name="palpite"
                placeholder="Palpite"
                className={styles.textBox}
              />
              <Button
                variant="primary"
                type="submit"
                className={styles.submitButton}
              >
                Submeter
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <div> </div>
      )}

      {status === wrong ? (
        <div className={styles.wrongPage}>
          <img src="/mad-santa.jpeg" className={styles.santaImage}></img>
          <h3>Errado! Tenta novamente!</h3>
        </div>
      ) : (
        <div> </div>
      )}

      {status === right ? (
        <div className={styles.rightPage}>
          <h3>CERTO!</h3>
          <h5>Feliz Natal!</h5>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
