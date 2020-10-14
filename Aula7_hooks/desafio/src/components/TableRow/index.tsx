import React from "react";
import { IAnimalQuantityByOwnerData } from "./interface";

const TableRow = ({
  animalQuantityByOwnerData: { owner, quantity },
}: IAnimalQuantityByOwnerData) => {
  return (
    <tr>
      <td>{owner}</td>
      <td>{quantity > 1 ? `${quantity} animais` : `${quantity} animal`}</td>
    </tr>
  );
};

export default TableRow;
