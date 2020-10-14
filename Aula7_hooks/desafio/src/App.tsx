import React, { useState, useEffect } from "react";

import SelectOwner from "./components/SelectOwner";
import SelectAnimals from "./components/SelectAnimals";

import TableBody from "./components/TableBody";

import Animals from "./apifake/Animals";
import Owners from "./apifake/Owners";

import IOwner from "./apifake/Interfaces/IOwner";
import IAnimal from "./apifake/Interfaces/IAnimal";
import { IAnimalQuantityByOwnerListData } from "./components/TableBody/interface";

import "./style.css";

const owners: Owners = new Owners();
const animals: Animals = new Animals();

function App() {
  const [animalOwners, setAnimalOwners] = useState<IOwner[]>([]);
  const [animalList, setanimalLists] = useState<IAnimal[]>([]);
  const [animalQuantityByOwnerList, setAnimalQuantityByOwnerList] = useState<
    IAnimalQuantityByOwnerListData[]
  >([]);

  useEffect(() => {
    async function getAllOwners() {
      const animalOwnersList = await owners.getAll();

      setAnimalOwners(animalOwnersList);
    }

    getAllOwners();
  }, []);

  const handleSetAnimals = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ownerName = e.target.selectedOptions[0].innerText;
    const ownerId = Number(e.currentTarget.value);
    const animalsByOwner = await animals.getByOwnerId(ownerId);

    setanimalLists(animalsByOwner);

    const ownerObj: IAnimalQuantityByOwnerListData = {
      owner: ownerName,
      quantity: animalsByOwner.length,
    };

    buildAnimalList(ownerObj);
  };

  const buildAnimalList = (
    ownerQuantityObject: IAnimalQuantityByOwnerListData
  ) => {
    const ownerDoesntExists = animalQuantityByOwnerList.findIndex(
      (object) => object.owner === ownerQuantityObject.owner
    );

    if (ownerDoesntExists) {
      setAnimalQuantityByOwnerList((prevState) => [
        ...prevState,
        ownerQuantityObject,
      ]);
    }    
  };

  const sortOwnersByAnimalQuantity = () => {
    const sortedOwnerArray = animalQuantityByOwnerList.sort((objOne, objTwo) => {
      return objOne.quantity > objTwo.quantity ? -1 : 1
    })

    setAnimalQuantityByOwnerList(sortedOwnerArray);
  }

  return (
    <div className="App">
      <section id="owners-section">
        <SelectOwner
          labelId="donosAnimais"
          labelText="Donos:"
          labelName="donos"
          defaultOptionText="Selecione o Dono"
          dataList={animalOwners}
          handleSetAnimals={handleSetAnimals}
        />
      </section>
      <section id="animals-section">
        <SelectAnimals
          labelId="animais"
          labelText="Animais:"
          labelName="animais"
          defaultOptionText="Selecione o animal"
          dataList={animalList}
        />
      </section>
      <section id="report">
        <button onClick={() => sortOwnersByAnimalQuantity()}>Ordenar donos com mais animais</button>

        <table id="reportList">
          <thead>
            <tr>
              <th>Dono</th>
              <th>Quantidade</th>
            </tr>
          </thead>

          <TableBody animalQuantityByOwnerList={animalQuantityByOwnerList} />
        </table>
      </section>
    </div>
  );
}

export default App;
