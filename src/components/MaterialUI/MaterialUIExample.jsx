import React from "react";
import ButtonExample from "./ButtonExample";
import CenteredGrid from "./CenteredGrid";
import IconLabelButtons from "./IconLabelButtons";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedList from "./VirtualizedList";

export default function MaterialUIExample() {
  return (
    <div>
      <VirtualizedList />
      <TemporaryDrawer />
      <IconLabelButtons />
      <CenteredGrid />
      <ButtonExample />
    </div>
  );
}
