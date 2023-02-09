import { React, useCallback, useEffect, useState } from "react";
import ElfCard from "./ElfCard";

const Elves = () => {
  const [loadedElves, setLoadedElves] = useState(25);
  const [elvesArr, setElvesArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [minLevel, setMinLevel] = useState("0");
  const [maxLevel, setMaxLevel] = useState("100");
  const [selectClass, setSelectClass] = useState("");
  const collectionElders = "0xfb2b13c622d1590f9199f75d975574e8240b2618";
  const colNameElders = "elders";

  const elfData = useCallback(() => {
    for (let i = elvesArr[elvesArr.length - 1] + 1; i <= loadedElves; i++) {
      setElvesArr((o) => [...o, i]);
    }
  }, [elvesArr, loadedElves]);

  const handleMinLevel = (e) => {
    setMinLevel(e);
  };

  const handleMaxLevel = (e) => {
    setMaxLevel(e);
  };

  useEffect(() => {
    elfData();
  }, [loadedElves, elfData]);
  return (
    <div className="maindiv">
      <div className="levels-input">
        <div>
          <div className="up">Min. Level</div>
          <input
            className="level"
            value={minLevel}
            onChange={(e) => handleMinLevel(e.target.value)}
          />
        </div>
        <div className="up">
          <div>Max. Level</div>
          <input
            className="level"
            value={maxLevel}
            onChange={(e) => handleMaxLevel(e.target.value)}
          />
        </div>
        <select className="select" onChange={(e) => setSelectClass(e.target.value)}>
          <option value="">-Select class-</option>
          <option value="Ranger">Ranger</option>
          <option value="Assassin">Assassin</option>
          <option value="Druid">Druid</option>
          <option value="Berserker">Berserker</option>
          <option value="Sorceress">Sorceress</option>
          <option value="Mauler">Mauler</option>
        </select>
      </div>
      <div className="elves">
        {elvesArr.map((elders, key) => {
          return (
            <ElfCard
              key={key}
              typeOfElf={true}
              data={elvesArr}
              elfId={elders}
              collectionId={collectionElders}
              collectionName={colNameElders}
              minLevel={minLevel}
              maxLevel={maxLevel}
              selectClass={selectClass}
            />
          );
        })}
      </div>
      <button
        className="search"
        id="loadmore"
        onClick={() => setLoadedElves(loadedElves + 25)}
      >
        Load more
      </button>
    </div>
  );
};
export default Elves;
