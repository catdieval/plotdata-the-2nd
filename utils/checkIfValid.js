export default function checkIfValid(data, { separator }) {

  if (!data.includes(separator)) {
    throw new Error(`data does not include separator: ${separator}`);
  }
}
