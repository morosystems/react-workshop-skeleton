import React, { FunctionComponent } from "react";

import {IWorker} from "../types";

export type UnemployedWorkersProps = {
  workers: Array<IWorker>;
  msg: string;
};

/**
 * Úkol 2
 * 3. doplnění kontejneru src/workers/containers/UnemployedWorkers" bude zobrazovat přehled nezaměstnaných pracovníků
 *    - použití připravených komponent
 *        - WorkerListHeader - zobrazuje lokalizovaný nadpis, použijeme selektor i18n.getMessage(state, "unemployed")
 *        - WorkerList - zobrazuje jména nezměstnaných pracovníků, ty získáme ze stavu pomocí selektoru z definovaného v src/workers/selecectors.ts
 *    - data pro komponenty je potřeba získat z reduxu napojením komponenty
 *        - použijeme HOC connect z balíku react-redux
 *        - vytovoříme funkci mapStateToProps, která má první parametr stav aplikace (typu IState) výsledkem budou propsy naplněné daty ze selektorů
 */
export const UnconnectedUnemployedWorkers: FunctionComponent<
  UnemployedWorkersProps
> = () => {
  return (
    <div>
    </div>
  );
};

export const UnemployedWorkers = UnconnectedUnemployedWorkers; // TODO connect component;
