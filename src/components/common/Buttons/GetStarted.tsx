import styled from "styled-components";
import RightArrowIcon from "../icons/RightArrowIcon";

const GetStarted = () => {
  return (
    <Wrapper>
      <p>get started</p>
      <RightArrowIcon />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #6936f5;
  padding: 1rem 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
  margin-bottom: 16px;
`;

export default GetStarted;
