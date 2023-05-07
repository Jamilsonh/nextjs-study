import React from 'react';
import { useState } from 'react';

const options = [
  { name: 'Pedra', emoji: '✊' },
  { name: 'Papel', emoji: '✋' },
  { name: 'Tesoura', emoji: '✌' },
];

const getRandomOption = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const getResult = (
  playerOption: string,
  computerOption: string,
  setPlayerScore: any,
  setComputerScore: any
) => {
  if (playerOption === computerOption) {
    return 'Empate';
  }
  if (
    (playerOption === 'Pedra' && computerOption === 'Tesoura') ||
    (playerOption === 'Papel' && computerOption === 'Pedra') ||
    (playerOption === 'Tesoura' && computerOption === 'Papel')
  ) {
    setPlayerScore((playerScore: any) => playerScore + 1);
    return 'Você ganhou!';
  }
  setComputerScore((computerScore: any) => computerScore + 1);
  return 'Você perdeu!';
};

export default function Joken() {
  const [playerOption, setPlayerOption] = useState('');
  const [computerOption, setComputerOption] = useState('');
  const [result, setResult] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<{
    player: string;
    computer: string;
  }>({ player: '', computer: '' });

  const [playerScore, setPlayerScore] = useState<any>(0);
  const [computerScore, setComputerScore] = useState<any>(0);

  const handleOptionClick = (optionName: string) => {
    const option = options.find((o) => o.name === optionName);
    if (option) {
      const computer = getRandomOption();
      const gameResult = getResult(
        option.name,
        computer.name,
        setPlayerScore,
        setComputerScore
      );
      setSelectedOptions({ player: option.emoji, computer: computer.emoji });
      setPlayerOption(option.emoji);
      setComputerOption(computer.emoji);
      setResult(gameResult);
    }
  };

  return (
    <div className='flex items-center justify-center h-full w-full bg-gray-900'>
      <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl flex justify-between items-center text-3xl mx-auto overflow-hidden '>
        <div className='w-1/5 h-full bg-blue-300  flex flex-col justify-around items-center'>
          <div className='h-1/6 bg-slate-300 w-full flex justify-center items-center text-slate-800'>
            Voce
          </div>
          <div className='h-1/6 w-full items-center justify-center flex '>
            <div className='bg-blue-200 p-1 text-slate-800 rounded-full'>
              {playerScore}
            </div>
          </div>
          <div className='h-4/6 flex flex-col justify-center items-center p-2 w-full gap-2'>
            {options.map((option) => (
              <button
                className={`bg-gray-500 w-full h-2/5 rounded-2xl text-4xl ${
                  selectedOptions.player === option.emoji ? 'bg-red-400' : ''
                }`}
                key={option.name}
                onClick={() => handleOptionClick(option.name)}
              >
                {option.emoji}
              </button>
            ))}
          </div>
        </div>

        <div className='w-3/5 h-full bg-blue-500 p-2 flex justify-center items-center'>
          {playerOption && computerOption && (
            <>
              <div className='w-1/4 h-full flex justify-center items-center'>
                <h2>{playerOption}</h2>
              </div>
              <div className='w-2/4 h-full flex justify-center items-center'>
                <h2>{result}</h2>
              </div>
              <div className='w-1/4 h-full flex justify-center items-center'>
                <h2>{computerOption}</h2>
              </div>
            </>
          )}
        </div>

        <div className='w-1/5 h-full bg-blue-300  flex flex-col justify-around items-center'>
          <div className='h-1/6 bg-slate-300 w-full flex justify-center items-center text-slate-800'>
            Computador
          </div>
          <div className='h-1/6 w-full items-center justify-center flex '>
            <div className='bg-blue-200 p-1 text-slate-800 rounded-full'>
              {computerScore}
            </div>
          </div>
          <div className='h-4/6 flex flex-col justify-center items-center p-2 w-full gap-2'>
            {options.map((option) => (
              <button
                className={`bg-gray-500 w-full h-2/5 rounded-2xl text-4xl ${
                  selectedOptions.computer === option.emoji ? 'bg-red-400' : ''
                }`}
                key={option.name}
              >
                {option.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
