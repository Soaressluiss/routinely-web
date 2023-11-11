import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import PriorityFlag from "../PriorityFlag";
import * as S from "./styles";

interface IContainerTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ContainerTask({ setIsEditTaskOpen }: IContainerTaskProps) {
  return (
    <S.Wrapper>
      <S.ContainerTask>
        <S.ContainerCheckbox type="checkbox" />
        <S.ContainerText>afawdawdawdawadawadwdawdawdaw</S.ContainerText>
        <S.ContainerCategory>pessoal</S.ContainerCategory>
        <S.ContainerSubCategory>contas</S.ContainerSubCategory>
        <S.ContainerPriority>
          <PriorityFlag />
        </S.ContainerPriority>
        <EditButton setIsEditTaskOpen={setIsEditTaskOpen} />
        <DeleteButton />
      </S.ContainerTask>
    </S.Wrapper>
  );
}
