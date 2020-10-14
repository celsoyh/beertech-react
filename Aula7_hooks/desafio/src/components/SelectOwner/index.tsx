import React, { ChangeEvent } from "react";
import IOwner from "../../apifake/Interfaces/IOwner";

interface IProps {
  labelText: string;
  labelName: string;
  labelId: string;
  defaultOptionText: string;
  dataType?: string;
  dataList: IOwner[];
  handleSetAnimals(e: React.ChangeEvent<HTMLSelectElement>): void
}

const SelectOwner: React.FunctionComponent<IProps> = ({
  labelText,
  labelName,
  labelId,
  defaultOptionText,
  dataList,
  handleSetAnimals
}) => {
  return (
    <>
      <label htmlFor={labelId}>{labelText}</label>
      <select onChange={e => handleSetAnimals(e)} name={labelName} id={labelId} defaultValue="default">
        <option value="default" disabled>
          {defaultOptionText}
        </option>

        {dataList.length &&
          dataList.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
      </select>
    </>
  );
};

export default SelectOwner;
