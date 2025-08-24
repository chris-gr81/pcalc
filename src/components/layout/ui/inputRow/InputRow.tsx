import BaseInput from "../numberInput/NumberInput";
import SelectInput from "../selectInput/SelectInput";
import "./inputRow.scss";

function InputRow() {
  return (
    <div className="input-row">
      <div className="input-row__upper">
        <SelectInput />
        <BaseInput />
      </div>
    </div>
  );
}
export default InputRow;
