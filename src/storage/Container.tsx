import React, { FunctionComponent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { ResourceItem, GridLayout } from "components";
import {ResourceType, NoneOwnProps, IState} from "types";

type StorageComponentProps = {
  woodAmount: number;
  foodAmount: number;
  workerCount: number;
  workerCapacity: number;
};

/**
 * Úkol 3
 * 4. zapojení getWoodAmount, getFoodAmount, getWorkerCapacity  v src/storage/Container.tsx
 */
const StorageComponent: FunctionComponent<StorageComponentProps> = ({
  woodAmount,
  foodAmount,
  workerCount,
  workerCapacity
}) => (
  <GridLayout horizontalSpace={15}>
    <ResourceItem count={woodAmount} resourceType={ResourceType.wood} />
    <ResourceItem count={foodAmount} resourceType={ResourceType.food} />
    <ResourceItem
      count={workerCount}
      maxCount={workerCapacity}
      resourceType={ResourceType.worker}
    />
  </GridLayout>
);

type StateProps = Pick<
  StorageComponentProps,
  "woodAmount" | "foodAmount" | "workerCount" | "workerCapacity"
>;

// TODO replace 0 for selectors
const mapStateToProps: MapStateToProps<StateProps, NoneOwnProps, IState> = state => ({
    woodAmount: 0,
    foodAmount: 0,
    workerCount: 0,
    workerCapacity: 0
});

export const StorageContainer = connect(mapStateToProps)(StorageComponent);
