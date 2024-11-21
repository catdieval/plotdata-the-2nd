import DialogBox from "../DialogBox";
import Paragraph from "../Paragraph";
import Container from "../Container";
import styled from "styled-components";
import InputTypeRadio from "../InputTypeRadio";

const TitleWrapper = styled.div`
  position: relative;
`;

const InfoButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(370%, -50%);
`;

export default function LogScaleProperties({ 
  onSettingsChange,
  settings, 
}) {
  return (
    <>
      <TitleWrapper>
        <Container $centered="center">
          <Paragraph $variant="border">
            Logarithmic scale for the axes:
          </Paragraph>
          <InfoButtonWrapper>
            <DialogBox />
          </InfoButtonWrapper>
        </Container>
      </TitleWrapper>
      <Container $wrap="wrap">
        <Container $direction="column" $center>
          <Container $direction="column" $center>
            <Paragraph $variant="bold">For x-axis:</Paragraph>
            <Container $direction="column">
              <InputTypeRadio
                labelString="yes"
                idString="yes"
                valueString="log"
                onChange={onSettingsChange}
                nameString="logXAxis"
              />
              <InputTypeRadio
                labelString="no, use a linear scale"
                idString="no"
                valueString="linear"
                onChange={onSettingsChange}
                nameString="logXAxis"
              />
            </Container>
          </Container>
          {(settings.logXAxis.length != 0) && (
            <Paragraph>x-axis scale: <b>{settings.logXAxis}</b></Paragraph>
          )}
        </Container>
        <Container $direction="column" $center>
          <Container $direction="column" $center>
            <Paragraph $variant="bold">For y-axis:</Paragraph>
            <Container $direction="column">
              <InputTypeRadio
                labelString="yes"
                idString="yes"
                valueString="log"
                onChange={onSettingsChange}
                nameString="logYAxis"
              />
              <InputTypeRadio
                labelString="no, use a linear scale"
                idString="no"
                valueString="linear"
                onChange={onSettingsChange}
                nameString="logYAxis"
              />
            </Container> 
          </Container>
          {(settings.logYAxis.length != 0) && (
            <Paragraph>y-axis scale: <b>{settings.logYAxis}</b></Paragraph>
          )}
        </Container>
      </Container>
    </>
  );
}
