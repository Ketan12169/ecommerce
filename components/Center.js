import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0px;
    `}
  @media screen and (min-width: 1080px) {
    max-width: 1000px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export default function Center({ children, flex }) {
  return <StyledDiv flex={flex}>{children}</StyledDiv>;
}
