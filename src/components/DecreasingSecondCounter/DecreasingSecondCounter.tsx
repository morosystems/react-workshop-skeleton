import React, { FunctionComponent, useState, useEffect } from "react";
import {bemClassNames} from "bemClassNames";

const cn = bemClassNames('DecreasingSecondCounter');

export type DecreasingSecondCounterProps = {
  msg: string;
  startValue: number;
  isDarkTheme: boolean;
  onCounterReset: () => void;
};

/**
 * UKOL 1
 * 1. pro rozhraní použijeme propsy msg, startValue, isDarkTheme, onCounterReset
 *    - komponenta je již zapojená do stránky i na redux a startValue, isDarkTheme, onCounterReset obsahují příslušné data
 *    - typování není zatím třeba řešit
 * 2. aktuální hodnotu counteru máme uloženou pomocí hooku useState https://reactjs.org/docs/hooks-state.html
 * 3. za pomoci useEffect hooku budem odečítat čas a když dojdem na nulu, resetujeme na startValue https://reactjs.org/docs/hooks-effect.html
 *    - hook závisí na propsech startValue a onCounterReset (a výstupu useState)
 *    - dokud nedojdem s counterem na nulu, tak snižujeme hodnotu counteru
 *    - ve chvíli kdy dojdem na nulu nastavíme hodnotu counteru na startValue a zároveň zavoláme onCounterReset
 *    - pro nastavení timeoutu na v vteřinu je vhodné použít funkce setTimeout nebo setInterval
 * 4. přidáme styly komponenty
 *  - pro tvorbu classname použijeme util funkci /src/bemClassNames rozšiřující https://www.npmjs.com/package/@bem-react/classname
 *  - classu komponenty chceme vygenerovat při inicializaci aplikace, parametriozvat ji pak při každé změně
 *  - do souboru /src/components/DecreasingSecondCounter.css přidáme
 *      - styl pro základní classname (použité pro light theme) - barva textu je #696969
 *      - styl pro classname s parametrem dark theme - barva textu je #cacaca
 * 5. lokalizujeme popisek v kontejneru /src/menu/container/WorkersArrivalCounter
 */

export const DecreasingSecondCounter: FunctionComponent<
  DecreasingSecondCounterProps
    > = ({msg, startValue, onCounterReset, isDarkTheme}) => {
  const [counter,setCounter] = useState(startValue);

  useEffect(() => {
    if(counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    } else {
      setCounter(startValue);
      onCounterReset();
    }
  }, [counter, setCounter, startValue, onCounterReset])
  return <span className={cn({isDarkTheme})}>{counter} {msg}</span>
};
