import React from "react";
import { IAnimalQuantityByOwnerList } from "./interface";
import TableRow from "../TableRow";

const TableBody = ({
  animalQuantityByOwnerList,
}: IAnimalQuantityByOwnerList) => {
  return (
    <tbody>
      {animalQuantityByOwnerList.length
        ? animalQuantityByOwnerList.map((animalQuantityByOwnerData) => (
            <TableRow
              key={animalQuantityByOwnerData.owner}
              animalQuantityByOwnerData={animalQuantityByOwnerData}
            />
          ))
        : <tr>
            <td>Selecione o dono</td>
            <td>Selecione o dono</td>
          </tr>}
    </tbody>
  );
};

export default TableBody;
