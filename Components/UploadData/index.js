import { Card } from "../Card/card.styled";
import Paragraph from "../Paragraph";
import Container from "../Container";
import FileUploader from "../FileUploader";
import InputTypeSubmit from "../InputTypeSubmit";
import {ButtonContainer} from "../Navigation/styledNavigation";
import WarningMessage from "../WarningMessage";
import Button from "../Button";

export default function UploadData({ 
  onDisableNextButton, 
  onNext, 
  onConversion,
  fileObject, 
  onUploadFile, 
  keynames,
  vals,
  currentStep,
}) {
  // Name of file
  const fileName = fileObject?.name;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function headerButNoData() {
    if (keynames?.length >= 1) {
      return vals.length < 1;
    } else {
      return ([]);
    }
  }

  const headerButNoDataTemp = headerButNoData();

  const hasNotCompletedStep1 = ((!fileObject) || 
  (((keynames?.length === undefined) || (keynames?.length < 1))) ||
  (((keynames?.length >= 1) && headerButNoDataTemp)));

  return (
    <>
        {((navigator.userAgent.match(/Android/i)) != null) && (
          <Container $centered="center">
            <WarningMessage 
              buttonMessage="OK, I will select only a csv file!"
              message="On Android devices, the file upload window allows in error all file types, instead of only csv files!"
            />
          </Container>
        )}
      <Card>
        <Paragraph $variant="bold">Requirements:</Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span> The file should have a header and a maximum size of
          4GB.
        </Paragraph>
        <Paragraph $variant="start">
          <span> ✔ </span>The file should have a comma (,) as separator and the decimal
          separator for numbers should be a period (.).
        </Paragraph>
      </Card>
      {((fileObject != null) && ((fileName.slice(-4)) != ".csv")) && (
          <Container $centered="center">
            <WarningMessage 
              buttonMessage="OK, I will select only a csv file!"
              message="The file format is wrong! You must select a csv file in order to continue!"
            />
          </Container>
        )}
        {((fileObject != null) && ((Array.isArray(keynames)) == false)) && (
          <Container $centered="center">
            <WarningMessage 
              buttonMessage="OK, I will select another file!"
              message="The file cannot be processed! Possible reasons: it is empty OR it uses the wrong separator OR it has only 1 column. You must select a different file in order to continue!"
            />
          </Container>
        )}
        {(((keynames?.length >= 1) && headerButNoDataTemp)) && (
          <Container $centered="center">
            <WarningMessage 
              buttonMessage="OK, I will select a file with both header and data!"
              message="The file does NOT have data after the header! You must select a file with both header and data in order to continue!"
            />
          </Container>
        )}          
      <form onSubmit={handleSubmit}>
        <Container $centered="center">
          <WarningMessage
            buttonMessage="I have understood!"
            message="If these file requirements are not respected, you may get unexpected results and a chart may not be possible!"
          />
          <FileUploader onUploadFile={onUploadFile} />
          {fileName ? <p>Uploaded file: {fileName}</p> : <p>No file chosen</p>}
          <ButtonContainer>
            <InputTypeSubmit
              valueString="Submit my data"
              onClick={onConversion}
              disabled={onDisableNextButton}
              $submitOnly={currentStep === 1}
            />
          </ButtonContainer>
          {((keynames?.length >= 1) && (vals?.length >= 1)) &&  
            <Paragraph>File processed successfully!</Paragraph>
          }
        </Container>
        <br/>
        <Container $centered="center">
          <Button
            onClick={onNext}
            disabled={hasNotCompletedStep1}
            $variant="next"
          >
            Next
          </Button>
        </Container>
      </form>
    </>
  );
}
