import React from "react";
import AlertDismissible from "./Alert";
import ButtonExample from "./ButtonExample";
import CarouselExample from "./CarouselExample";
import Gridexample from "./GridExample";
import MyModalWithGrid from "./MyModalWithGrid";

export default function ReactBootstrapExample() {
  return (
    <div>
      <MyModalWithGrid />
      <CarouselExample />
      <Gridexample />
      <AlertDismissible />
      <br />
      <br />
      <ButtonExample />
    </div>
  );
}
