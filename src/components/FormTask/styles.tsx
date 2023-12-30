import { keyframes, styled } from "styled-components";
import media from "../../mediaQueries";
import { InputStyle, LabelInput } from "../Input/styles";

const FadeUp = keyframes`
  from {
    transform: scale(0);
  }
  to { transform: scale(1)}
`;

export const Form = styled.form`
  max-width: 512px;
  width: 100%;
  height: max-content;
  padding: 24px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.719);
  border-radius: 5px;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 150px;
  animation: ${FadeUp} 0.4s ease;

  ${InputStyle} {
    width: 100%;
  }

  ${LabelInput} {
    font-size: 20px;
    margin: 0;
  }

  ${media.mobile} {
    height: 80vh;
    margin: 0;
    box-shadow: none;
    height: calc(100vh - 121px);
  }
`;

export const Title = styled.h3`
  color: #5c59bb;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 1rem;

  ${InputStyle} {
    max-width: 224px;
  }

  ${media.mobile} {
    &.select {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      > :first-child {
        grid-column: span 2;
      }
    }
  }
`;

export const ContainerPopUp = styled.div`
  position: relative;
  ${media.mobile} {
    ${InputStyle} {
      height: 112px;
      overflow-wrap: break-word;
    }
  }
`;

export const InputPopUp = styled.input`
  width: 464px;
  height: 56px;
  border: 1px solid #d8d6dc;
  border-radius: 8px;
  outline: none;
  font-size: 24px;
  padding: 16px;
  &:focus ~ label,
  &:valid ~ label {
    top: -15px;
    font-size: 0.75rem;
    background-color: white;
    padding: 0.2rem;
    transition: all 0.4s ease;
  }
`;
export const LabelPopUp = styled.label`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #171a21;
  position: absolute;
  top: 16px;
  left: 10px;
  pointer-events: none;
`;

export const ContainerDateTimePopUp = styled.div`
  position: relative;
`;

export const InputDateTimePopUp = styled.input`
  width: 224px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #d8d6dc;
  padding: 1rem;
  outline: none;
  cursor: pointer;
`;
export const LabelDateTimePopUp = styled.label`
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 5px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px 16px;
  max-width: 156px;
  width: 100%;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: #5c59bb;
  color: #f6f7f8;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    transition: all 0.4s ease;
    background-color: #a09df7;
    color: #222;
    font-weight: bold;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  width: 156px;
  height: 40px;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #d8d6dc;
  background-color: transparent;
  color: var(--aes-erro, #b3261e);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;
`;
