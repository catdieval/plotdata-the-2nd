import Button from "../Button";
import Image from "next/image";
import { Container } from "../Container";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ChartItem({ name, icon, onSelectChartType }) {
  return (
    <Container $direction="column">
      <Button $variant="selected" onClick={onSelectChartType}>
        {name}
      </Button>
      <ImageContainer>
        <Image src={icon} height={200} width={200} alt={name} />
      </ImageContainer>
    </Container>
  );
}
