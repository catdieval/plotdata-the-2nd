import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import Container from "../Container";
import FileUploader from "../FileUploader";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import Button from "../Button";

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
      {((navigator.userAgent.match(/Android/i)) != null) && (
        <dialog open>
          <Paragraph $variant="bold">WARNING!</Paragraph>  
          <Paragraph>On Android devices, the file upload window allows in error all file types, instead of only csv files!</Paragraph>  
            <form method="dialog">
             <Container $centered="center">
               <Button $variant="back">OK, I will select only a csv file!</Button>
             </Container>
            </form>
        </dialog>
      )}
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
        <Paragraph $variant="start">
          <span> ✔ </span> If the file contains missing values, then replace
          these values in the file by null.
        </Paragraph>
      </Card>
      <Container $centered="center" $center_screen>
      {((fileObject != null) && ((fileName.slice(-4)) == ".csv")) && (
        <dialog open>
          <Paragraph $variant="bold">WARNING!</Paragraph>  
          <Paragraph>The file format is wrong! You must select a csv file in order to continue!</Paragraph>  
          <form method="dialog">
           <Container $centered="center">
             <Button $variant="back">OK, I will select only a csv file!</Button>
           </Container>
          </form>
      </dialog>
      )}
      </Container>
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
