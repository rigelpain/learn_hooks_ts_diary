import React, { useState, useCallback } from "react";
import { Spot } from "../types";
import spots_json from "../data/spots.json";
import Select from "react-select";
import SpotView from "./SpotView";

interface SelectOption {
  value: string;
  label: string;
}

const spots: Spot[] = spots_json;

const SpotSearcher: React.FC<{}> = () => {
  const [selected_spot, setSelectedSpot] = useState<Spot | null>(null);

  const select_options: SelectOption[] = spots.map((x, i) => ({
    value: i.toString(),
    label: x.name,
  }));

  return (
    <>
      {selected_spot ? <SpotView spot={selected_spot} /> : null}

      {spots.map((x) => (
        <button onClick={() => setSelectedSpot(x)}>{x.name}</button>
      ))}

      <Select
        options={select_options}
        onChange={(option: SelectOption) =>
          setSelectedSpot(spots[option.value])
        }
      />
    </>
  );
};

export default SpotSearcher;
