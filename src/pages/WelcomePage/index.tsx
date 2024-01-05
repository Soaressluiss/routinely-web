import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import welcomePageImage from "../../assets/imagens/welcomePageImage.svg";
import Header from "../../components/Header";
import LogoShared from "../../components/LogoShared";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

export function WelcomePage() {
  const navigate = useNavigate();

  const { authorization } = useAuth();

  useEffect(() => {
    const fetchAuthorization = async () => {
      const { valid } = await authorization();
      if (valid) {
        navigate("/dashboardpage");
      }
    };
    fetchAuthorization();
  }, [authorization, navigate]);

  return (
    <>
      <ScrollToTop />
      <Header header="secundary" />
      <S.Wrapper>
        <div>
          <LogoShared />
          <S.Title>Boas-vindas</S.Title>
          <S.Caption>Escolha uma das opções para acessar </S.Caption>
          <S.ContainerButton>
            <S.ButtonAccount onClick={() => navigate("/SignInPage")}>Já tenho conta</S.ButtonAccount>
            <S.ButtonCreateAccount onClick={() => navigate("/SignUpPage")}>Criar conta</S.ButtonCreateAccount>
          </S.ContainerButton>
        </div>
        <img src={welcomePageImage} alt="Imagem da página de boas vindas" />
      </S.Wrapper>
    </>
  );
}
