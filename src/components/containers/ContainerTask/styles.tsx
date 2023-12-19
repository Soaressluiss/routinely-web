import { styled } from "styled-components";

export const ContainerTask = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: .5rem;
  > div {
    display: flex;
    gap: 0 .4rem;
  }
`;

export const ContainerCheckbox = styled.input`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const ContainerText = styled.span`
  width: 176px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #171a21;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 20px;
`;

export const ContainerCategory = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  padding: 4px 6px;
  gap: 4px;
  border-radius: 4px;
  background: #ffff7e;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #171a21;
`;

export const ContainerSubCategory = styled.span`
  color: #171a21;
  font-size: 1rem;
  line-height: 20px;
`;

export const ContainerPriority = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d42116;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 536px;
  flex-shrink: 0;
`;
