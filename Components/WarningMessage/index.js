import Paragraph from "../Paragraph";
import Container from "../Container";
import Button from "../Button";

export default function WarningMessage({message, buttonMessage}) {

    return (
        <dialog open>
          <Paragraph $variant="bold">WARNING!</Paragraph>  
          <Paragraph>{message}</Paragraph>  
          <form method="dialog">
           <Container $centered="center">
             <Button $variant="back">{buttonMessage}</Button>
           </Container>
          </form>
        </dialog>
    );
}