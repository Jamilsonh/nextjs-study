import { useState, useEffect } from 'react';
import Head from 'next/head';
import classNames from 'classnames';

const BUTTONS = ['A', 'B', 'C'];

export default function Home() {
  const [chosenButton, setChosenButton] = useState<string | null>(null);
  const [highlightedButton, setHighlightedButton] = useState<string | null>(
    null
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomButton = BUTTONS[Math.floor(Math.random() * BUTTONS.length)];
      setHighlightedButton(randomButton);
      setTimeout(() => {
        setHighlightedButton(null);
        setChosenButton(randomButton);
        setTimeout(() => {
          setChosenButton(null);
        }, 2000);
      }, 2000);
    }, 3000); // run every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Head>
        <title>Random Button Chooser</title>
        <meta name='description' content='Choose a button at random' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center space-y-4'>
        <h1 className='text-4xl font-bold'>Random Button Chooser</h1>

        <div className='flex space-x-4'>
          {BUTTONS.map((button) => (
            <button
              key={button}
              className={classNames(
                'py-2 px-4 rounded-lg transition-colors duration-500',
                {
                  'bg-green-500': chosenButton === button,
                  'bg-gray-200 hover:bg-gray-300': highlightedButton === button,
                  'bg-gray-200':
                    chosenButton !== button && highlightedButton !== button,
                }
              )}
              disabled={chosenButton !== null}
            >
              {button}
            </button>
          ))}
        </div>

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            const randomButton =
              BUTTONS[Math.floor(Math.random() * BUTTONS.length)];
            setChosenButton(randomButton);
            setTimeout(() => {
              setChosenButton(null);
            }, 2000);
          }}
          disabled={chosenButton !== null}
        >
          Choose randomly
        </button>
      </main>
    </div>
  );
}
