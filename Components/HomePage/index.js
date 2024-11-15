import WarningMessage from "../WarningMessage";
import Paragraph from "../Paragraph";
import UnorderedList from "../UnorderedList";
import Button from "../Button";
import ImageContainer from "../ImageContainer";
import Heading from "../Heading";
import Container from "../Container";
import { arrayOfSteps, arrayOfActions } from "../../lib/listOfBulletPoints";
import { examplePlotsArray } from "../../lib/examplePlotsArray";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  function handleGetStarted() {
    router.push("/steps");
  }

  return (
    <>
      {(screen.width < 350) && (
        <Container $centered="center">
          <WarningMessage 
            buttonMessage="OK!"
            message="The screen size width of your device may be too small for a comfortable display!"
          />
        </Container>
      )}  
      <Paragraph>
        With PlotData you can easily make customisable publication-quality
        charts, all without programming skills.
      </Paragraph>
      <Container $wrap="wrap" $gap>
        {examplePlotsArray.map((item) => {
          return (
            <ImageContainer key={item.name}>
              <Image src={item.path} height={250} width={300} alt={item.name} />
            </ImageContainer>
          );
        })}
      </Container>
      <Heading>Overview:</Heading>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfSteps} />
      </Container>
      <Paragraph>
        Et voila! An interactive chart gets generated, with the help of the
        <br />
        <a href="https://plotly.com/javascript/basic-charts/" target="_blank">
          Plotly JavaScript library
        </a>
        .
      </Paragraph>
      <Container $centered="center">
        <UnorderedList $arrayOfBulletPoints={arrayOfActions} />
        <Paragraph>
          You can find <a href="https://catdieval.github.io/" target="_blank">here</a> a CSV file for testing the process.
        </Paragraph>
        <Container $centered="center" $margin $margin_bottom>
          <Button onClick={handleGetStarted} $variant="plot">Get started</Button>
        </Container>
      </Container>
    </>
  );
}
