import Button from '@/components/RandomButton';
import { useState } from 'react';

export default function RandomButtons() {
  const [chosenButton, setChosenButton] = useState<string>();

  const handleChooseButton = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1:
        setChosenButton('A');
        break;
      case 2:
        setChosenButton('B');
        break;
      case 3:
        setChosenButton('C');
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex items-center justify-center h-full w-full bg-gray-900'>
      <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl flex justify-between items-center text-3xl mx-auto overflow-hidden '>
        <div className='flex mb-4'>
          <Button text='A' onClick={() => setChosenButton('A')} />
          <Button text='B' onClick={() => setChosenButton('B')} />
          <Button text='C' onClick={() => setChosenButton('C')} />
        </div>
        <Button text='Escolher botão' onClick={handleChooseButton} />
        {chosenButton && (
          <p className='mt-4'>{`Botão escolhido: ${chosenButton}`}</p>
        )}
      </div>
    </div>
  );
}
