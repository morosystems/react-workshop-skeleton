import React, { FunctionComponent } from "react";
import {connect} from 'react-redux';

import {IWorker} from "../types";
import {WorkerListHeader} from "./WorkerListHeader";
import {IState} from "../../types";
import {i18n} from "../../i18n";
import {WorkerList} from "./WorkerList";
import {getUnEmployedWorkers} from "../selectors";

export type UnemployedWorkersProps = {
  workers: Array<IWorker>;
  msg: string;
};

/**
 * Úkol 2
 * 3. doplnění kontejneru src/workers/containers/UnemployedWorkers" bude zobrazovat přehled nezaměstnaných pracovníků
 *    - data pro komponenty je potřeba získat z reduxu napojením komponenty
 *        - použijeme HOC connect z balíku react-redux
 *        - vytovoříme funkci mapStateToProps, která má první parametr stav aplikace (typu IState) výsledkem budou propsy naplněné daty ze selektorů
 *    - použití připravených komponent
 *        - WorkerListHeader - zobrazuje lokalizovaný nadpis, použijeme selektor i18n.getMessage(state, "unemployed")
 *        - WorkerList - zobrazuje jména nezměstnaných pracovníků, ty získáme ze stavu pomocí selektoru z definovaného v src/workers/selecectors.ts
 */
export const UnconnectedUnemployedWorkers: FunctionComponent<
  UnemployedWorkersProps
> = ({msg, workers}) => {
  return (
    <div>
      <WorkerListHeader title={msg} />
      <WorkerList workers={workers} />
    </div>
  );
};

const mapStateToProps = (state:IState) => ({
  workers: getUnEmployedWorkers(state),
  msg: i18n.getMessage(state, "unemployed"),
});

export const UnemployedWorkers = connect(mapStateToProps)(UnconnectedUnemployedWorkers);
