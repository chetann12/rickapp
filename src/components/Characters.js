import React, { useState, useEffect } from "react";
import Charlist from "./Charlist";

function Characters() {
  const [getchardata, setgetchardata] = useState([]);
  const [changeName, setchangeName] = useState("");
  const [changeStatus, setchangeStatus] = useState("all");
  const [changeGender, setchangeGender] = useState("all");

  useEffect(() => {
    const getdata = async () => {
      let url = "https://rickandmortyapi.com/api/character/";
      let data = await fetch(url);
      let parsedata = await data.json();
      setgetchardata(parsedata.results);
    };

    getdata();
  }, []);

  const filteredCharacters = getchardata.filter((character) => {
    
    const name = character.name.toLowerCase().includes(changeName.toLowerCase());
    const status = changeStatus === "all" || character.status === changeStatus;
    const gender = changeGender === "all" || character.gender === changeGender;
    
    return name && status && gender;
  });

  return (
    <div className="container">
      <h1 className="text-center">All Characters</h1>

      
      <div className="container">
        <div className="row">
            <div className="col"> 
        <input
          type="text"
          placeholder="Filter by name"
          value={changeName}
          onChange={(e) => setchangeName(e.target.value)}
          className='form-control mx-2'
        />
        </div>
        <div className="col"> 
        <select
          value={changeStatus}
          onChange={(e) => setchangeStatus(e.target.value)}
          className='mx-2 form-select'
        >
           <option value="all">All Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        </div>
        <div className="col">
        <select
          value={changeGender}
          onChange={(e) => setchangeGender(e.target.value)}
          className='mx-2 form-select'
        >
          <option value="all">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        </div>
        </div>
      </div>

       
      <div className="row">
        {filteredCharacters.map((element) => (
          <div className="col-md-4" key={element.url}>
            <Charlist
              title={element.name}
              imageurl={element.image}
              status={element.status}
              gender={element.gender}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
