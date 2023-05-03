import React from 'react';
import { useState } from 'react';

const options = ['Pedra', 'Papel', 'Tesoura'];

const getRandomOption = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const getResult = (playerOption: string, computerOption: string) => {
  if (playerOption === computerOption) {
    return 'Empate';
  }
  if (
    (playerOption === 'Pedra' && computerOption === 'Tesoura') ||
    (playerOption === 'Papel' && computerOption === 'Pedra') ||
    (playerOption === 'Tesoura' && computerOption === 'Papel')
  ) {
    return 'Você ganhou!';
  }
  return 'Você perdeu!';
};

export default function Joken() {
  const [playerOption, setPlayerOption] = useState('');
  const [computerOption, setComputerOption] = useState('');
  const [result, setResult] = useState('');

  const handleOptionClick = (option: string) => {
    const computer = getRandomOption();
    const gameResult = getResult(option, computer);
    setPlayerOption(option);
    setComputerOption(computer);
    setResult(gameResult);
  };

  return (
    <div className='flex items-center justify-center h-full w-full bg-gray-900'>
      <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl p-4 flex flex-col justify-center items-center text-3xl mx-auto '>
        <h1>Escolha uma opção:</h1>
        <div>
          {options.map((option) => (
            <button key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
        {playerOption && (
          <div>
            <h2>Você escolheu: {playerOption}</h2>
            <h2>O computador escolheu: {computerOption}</h2>
            <h2>Resultado: {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
