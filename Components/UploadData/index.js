import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import Container from "../Container";
import FileUploader from "../FileUploader";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import WarningMessage from "../WarningMessage";

export default function UploadData({ 
  onDisableNextButton, 
  onNext, 
  fileObject, 
  onUploadFile, 
}) {
  // Name of file
  const fileName = fileObject?.name;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container $centered="center">
      {((navigator.userAgent.match(/Android/i)) != null) && 
      <WarningMessage 
        buttonMessage="OK, I will select only a csv file!"
        message="On Android devices, the file upload window allows in error all file types, instead of only csv files!"
      />}
      </Container>
      <Card>
        <Paragraph $variant="bold">Requirements:</Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span> The file should have a header and a maximum size of
          4GB.
        </Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span>The file should be comma-delimited and the decimal
          separator for numbers should be a period (.).
        </Paragraph>
        <Container $centered="center">
          {((fileObject != null) && ((fileName.slice(-4)) == ".csv")) && 
            <WarningMessage 
              buttonMessage="OK, I will select only a csv file!"
              message="The file format is wrong! You must select a csv file in order to continue!"
            />}
        </Container>
        <Paragraph $variant="start">
          <span> ✔ </span> If the file contains missing values, then replace
          these values in the file by null.
        </Paragraph>
      </Card>
      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <FileUploader onUploadFile={onUploadFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
        </Container>
        <ButtonContainer>
          <InputTypeSubmit
            valueString="Next"
            onClick={onNext}
            disabled={onDisableNextButton}
          />  
        </ButtonContainer>
      </form>
    </>
  );
}
