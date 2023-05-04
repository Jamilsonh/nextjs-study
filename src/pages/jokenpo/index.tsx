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
  const [selectedOptions, setSelectedOptions] = useState<{
    player: string;
    computer: string;
  }>({ player: '', computer: '' });

  const handleOptionClick = (optionName: string) => {
    const option = options.find((o) => o.name === optionName);
    if (option) {
      const computer = getRandomOption();
      const gameResult = getResult(option.name, computer.name);
      setSelectedOptions({ player: option.emoji, computer: computer.emoji });
      setPlayerOption(option.emoji);
      setComputerOption(computer.emoji);
      setResult(gameResult);
    }
  };

  return (
    <div className='flex items-center justify-center h-full w-full bg-gray-900'>
      <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl flex justify-between items-center text-3xl mx-auto overflow-hidden '>
        <div className='w-1/5 h-full bg-blue-300 p-2 flex flex-col justify-center items-center'>
          <div className='h-1/5'>Voce</div>
          <div className='h-4/5 flex flex-col justify-center items-center w-full'>
            {options.map((option) => (
              <button
                className={`bg-gray-500 w-1/2 h-2/5 rounded-full hover:bg-transparent ${
                  selectedOptions.player === option.emoji ? 'bg-blue-400' : ''
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
          {playerOption && (
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

        <div className='w-1/5 h-full bg-blue-300 p-2 flex flex-col justify-center items-center'>
          <div className='h-1/5'>Machine</div>
          <div className='h-4/5 flex flex-col justify-center items-center w-full'>
            {options.map((option) => (
              <button
                className={`bg-gray-500 w-1/2 h-2/5 rounded-full hover:bg-transparent ${
                  selectedOptions.computer === option.emoji ? 'bg-blue-400' : ''
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
