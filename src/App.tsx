import React, { useState, Fragment } from "react";
import Select from 'react-select';


const App: React.FC = () => {

  const spotsData = require('./spots.json');

  const [spotsName, setSpotsName] = useState("はぼろバラ園");
  const [spotsPhoto, setSpotsPhoto] = useState("./img/rosegarden_haboro.jpg");
  const [spotsParagraph, setSpotsParagraph] = useState(
    "丘の斜面を利用して造成されたローズガーデンで、水流や修景池とともに楽しめる涼しげな感じが魅力。また、カロスの丘展望台に上ると秩父別の田園地帯と街並みが一望できるため、景観を楽しめるバラ園。"
  )

  const setSpots = (i: number) => {
    setSpotsName(spotsData[i].name);
    setSpotsPhoto(spotsData[i].photo);
    setSpotsParagraph(spotsData[i].paragraph);
  }

  const options = [
    { value: 0, label: spotsData[0].name },
    { value: 1, label: spotsData[1].name },
    { value: 2, label: spotsData[2].name },
  ]

  return (
    <Fragment>
      <h1>jsonデータ取得</h1>
      <div>
        現在の場所 : <span>{spotsName}</span>
        <br />
        <img src={spotsPhoto} alt=""></img>
        <p>{spotsParagraph}</p>
      </div>
      <button
        onClick={() => {
          setSpots(0)
        }}
      >
        {spotsData[0].name}
      </button>
      <button
        onClick={() => {
          setSpots(1)
        }}
      >
        {spotsData[1].name}
      </button>
      <button
        onClick={() => {
          setSpots(2)
        }}
      >
        {spotsData[2].name}
      </button>

      <Select options={options} />
    </Fragment>
  );
};

export default App;
