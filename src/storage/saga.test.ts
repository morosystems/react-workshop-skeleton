import { fork } from "redux-saga/effects";
import {EffectProviders, StaticProvider} from "redux-saga-test-plan/providers";

import {workers} from "../workers";
import {fieldProductionSaga, initStorageSaga, sawProductionSaga} from "./saga";

interface IWorker {}

describe("skladiště - sága", () => {
  //TODO remove ts-ignore after use of variable
  //@ts-ignore
  const rootSagaProviders: EffectProviders | StaticProvider[] = [
    [fork(initStorageSaga), null],
    [fork(fieldProductionSaga), null],
    [fork(sawProductionSaga), null],
  ];

  /**
   * 4. otestujeme ságy
   * integrační test
   *  - pomocí expectSaga provedeme integrační test hlavní ságy
   *  - jsou definovany providery v rootSagaProviders
   *      - provider je pole, kde první prvek pole je daný efekt a druhý jsou jeho parametry (pokud nepředáváme parametry nastavíme druhý prvek na null)
   *      - nastavíme providery expect ságy pomocí .provide(rootSagaProviders)
   *  - otestujeme dílčí efekty nad expect ságou
   *  - nakonec zavoláme .silentRun() abychom se vyhli warningů ohledně nekonečného cyklu
   */
  // it("po spuštění zavolá ságy pro inicializaci skladiště a produkci surovin", () => expectSaga(saga)
  //     .provide(rootSagaProviders)
  //     // TODO
  //     .silentRun()
  // );

  /**
   * 4. otestujeme ságy
   * jednotkový test
   *  - pomocí testSaga provedeme jednotkový test initStorageSaga
   *  - na začátku testu je třeba napsat .next()
   *  - otestujeme dané efekty, select, put, delay.. ve stejném pořadí jak jsou volány v sáze
   *  - každý další efekt krokujeme pomocí next
   *  - pokud potřebujem předat výsledek do proměnné předáme jako parametr následujícího .next()
   *  - ujistíme se že sága doběhla pomocí .isDone()
   */
  describe("sága pro inicializaci skladiště", () => {
    // TODO remove ignore and use variable
    // @ts-ignore
    const gameConfigMock = {startingWorkerCapacity: 100};
    it("načte ze store konfiguraci hry a dispatchne akci pro nastavení kapacity pracovníků", () => {
      // TODO testSaga(initStorageSaga)
    });
  })

  /**
   * 4. otestujeme ságy
   *  - pomocí testSaga provedeme jednotkový test initStorageSaga
   *  - na začátku testu je třeba napsat .next()
   *  - otestujeme dané efekty, select, put, delay.. ve stejném pořadí jak jsou volány v sáze
   *  - každý další efekt krokujeme pomocí next
   *  - pokud potřebujem předat výsledek do proměnné předáme jako parametr následujícího .next()
   *  - pokud je sága v nekončeném cyklu, testujeme jeden cyklus a ukončíme ji pomocí .finish()
   */
  describe("sága pro produkci jídla na poli", () => {
    // TODO remove ignore and use variable
    // @ts-ignore
    const gameConfigMock = {fieldProductionSeconds: 1, fieldProductionPerWorkerRatio: 5};
    it("Pokud jsou na poli pracovníci, tak po dané prodlevě dipatchuje akci pro přidání jídla do skladiště", () => {
      // TODO remove ignore and use variable
      // @ts-ignore
      const singleFiledWorkerMock: Array<IWorker> = [{
        id: "0x0",
        name: "rollin",
        gender: workers.Gender.male,
        workOccupation: workers.WorkOccupation.field,
        description: 'stone',
        isStarving: false,
        hasPassed: false,
      }];
      // TODO testSaga
    });

    it("Pokud není dostatek pracovníků, akce pro přidání jídla do skladiště není dispatchnuta", () => {
      // TODO remove ignore and use variable
      // @ts-ignore
      const noFiledWorkersMock: Array<IWorker> = [];
      // TODO testSaga
    });
  })

  /**
   * 4. otestujeme ságy
   * jednotkový test
   *  - pomocí testSaga provedeme jednotkový test initStorageSaga
   *  - na začátku testu je třeba napsat .next()
   *  - otestujeme dané efekty, select, put, delay..
   *  - každý další efekt krokujeme pomocí next
   *  - pokud potřebujem předat výsledek do proměnné předáme jako parametr následujícího .next()
   *  - ujistíme se že sága doběhla pomocí .isDone()
   */
  describe("sága pro produkci dřeva na pile", () => {
      // @ts-ignore
    const gameConfigMock = {sawProductionSeconds: 1, sawProductionPerWorkerRatio: 5};
      it("Pokud jsou na pile pracovníci, tak po dané prodlevě dipatchuje akci pro přidání dřeva do skladiště", () => {
        // TODO remove ignore and use variable
        // @ts-ignore
        const singleSawWorkerMock: Array<IWorker> = [{
          id: "0x0",
          name: "rollin",
          gender: workers.Gender.female,
          workOccupation: workers.WorkOccupation.saw,
          description: 'stone',
          isStarving: false,
          hasPassed: false,
        }];
        // TODO testSaga
      });

      it("Pokud není dostatek pracovníků, akce pro přidání jídla do skladiště není dispatchnuta", () => {
        // TODO remove ignore and use variable
        // @ts-ignore
        const noFiledWorkersMock: Array<IWorker> = [];
        // TODO testSaga
      });
  })
});
