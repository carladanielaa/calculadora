import styled from "styled-components";
import { useState } from "react";

const Botao = styled.button`
  color: red;
`;

const TituloPrincipal = styled.h3`
  color: red;
`;
const H2 = styled.h2`
  color: blue;
  align-items: center;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();

  const [segundoValor, setSegundoValor] = useState();

  const [resultado, setResultado] = useState();

  const CapturarPrimeiroValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <>
      <H2> Calculadora </H2>
      <input onChange={CapturarPrimeiroValor} />
      <input onChange={CapturarSegundoValor} />
      <Botao onClick={Soma}>+</Botao>
      <Botao onClick={Subtracao}>-</Botao>
      <Botao onClick={Multiplicacao}>*</Botao>
      <Botao onClick={Divisao}>/</Botao>

      <TituloPrincipal>Seu resultado é: {resultado}</TituloPrincipal>
    </>
  );
}
