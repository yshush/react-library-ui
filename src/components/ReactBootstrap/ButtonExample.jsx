import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function ButtonExample() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button variant="danger">Left</Button>
        <Button variant="outline-info">Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <Button size="lg">1</Button>
      <Button>2</Button>
      <Button size="sm">3</Button>
    </>
  );
}
