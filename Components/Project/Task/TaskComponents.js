import styled from "styled-components";
export const TasksDiv = styled.div`
  height: 15rem;
  width: 20rem;
  padding: 0.5rem 2rem;
  display: flex;
  background-color: ${(props) => props.colortheme.main};
  border-radius: 2rem;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 1102px) {
    width: 90%;
    height: 10rem;

  }
`;
export const Maindiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 1102px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
@media (max-width: 480px) {
  flex-direction: column;

  }
`;
export const TaskContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 80vw;
  gap: 1.2rem;
  height: 27vh;
  padding: 1rem 0.5rem;
  border-radius:1rem;
  margin: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 58vh;
  margin: 1rem 2rem;
  
  &::-webkit-scrollbar {
    width: 0.2rem;
    
  }
  &::-webkit-scrollbar-button {
  height: 100px; //for vertical scrollbar
}
  &::-webkit-scrollbar-track {
    background: lightgrey;
    
  }

  &::-webkit-scrollbar-thumb {
     background: gray;
    }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media(max-width: 480px){
        height: 41vh;
    }
`;
export const TaskHeading = styled.div`
  justify-content: center;
  height: auto;
  font-weight: 500;
  font-size: larger;
  @media (max-width: 1102px) {
    font-size: medium;
  }
`;
export const Date = styled.div`
  font-size: small;
`;
export const DateDiv = styled.div`
  display: flex;
  padding: 1rem 0.85rem 1rem 1rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1102px) {
    padding: 0.5rem ;
  }
`;
export const Type = styled.div`
  font-size: x-small;
  @media (max-width: 1102px) {
    display: none;
  }
`;
export const Progress = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 2rem 0rem;
  flex-direction: column;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const ProgressBar = styled.div`
  height: 3px;
  display: block;
  width: 100%;
  margin-top: 1rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.colortheme.gradient} ${(props) => props.Score},
    white 20%
  );
`;
export const Buttondiv = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1102px) {
   width: auto;
  }
`;
export const Button = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  background-color: white;
  color: ${(props) => props.colortheme.gradient};
  @media (max-width: 1102px) {
    display: ${(props)=>props.left&&'none'};
  }
`;
export const ProgressScore = styled.div`
  text-align: end;
`;