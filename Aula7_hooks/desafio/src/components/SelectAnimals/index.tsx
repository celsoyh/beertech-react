import React from "react";
import IAnimal from "../../apifake/Interfaces/IAnimal";

interface IProps {
  labelText: string;
  labelName: string;
  labelId: string;
  defaultOptionText: string;
  dataList: IAnimal[];
}

const SelectAnimals: React.FunctionComponent<IProps> = ({
  labelText,
  labelName,
  labelId,
  defaultOptionText,
  dataList,
}) => {
  return (
    <>
      <label htmlFor={labelId}>{labelText}</label>
      <select name={labelName} id={labelId} defaultValue="default">
        <option value="default" disabled>
          {defaultOptionText}
        </option>

        {dataList.length &&
          dataList.map((data) => <option key={data.id}>{data.name}</option>)}
      </select>
    </>
  );
};

export default SelectAnimals;
