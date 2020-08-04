import React, { FunctionComponent } from "react";

import { GridLayout } from "components";
import {
  ScreenTheme,
  // UnemployedWorkers,
  FieldWorkers,
  SawWorkers,
  Graveyard
} from "./containers";

type ScreenContainerProps = {};

export const WorkersContainer: FunctionComponent<ScreenContainerProps> = () => {
  return (
    <ScreenTheme>
      <GridLayout horizontalSpace={20} isFullWidth>
        {/* Typescript will highlight this component. We will fix it by connecting component to state inside UnemployedWorkers.tsx */}
        {/*<UnemployedWorkers />*/}
        <FieldWorkers />
        <SawWorkers />
        <Graveyard />
      </GridLayout>
    </ScreenTheme>
  );
};
