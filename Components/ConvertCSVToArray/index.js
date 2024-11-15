import checkIfValid from "../../utils/checkIfValid";
import convertCSVToArrayOfObjects from "../../utils/convertCSVToArrayOfObjects";

export default function ConvertCSVToArray(data, { header, separator } = {}) {
  const thisOptions = {
    header: header !== false,
    separator: separator || ",",
  };

  try {
    checkIfValid(data, thisOptions);
    return convertCSVToArrayOfObjects(data, thisOptions); 

  } catch (error) {
    return ([]);
  } 
}
