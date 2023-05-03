import Counter from '@/components/FirstExample/Counter';
import List from '@/components/FirstExample/List';
import { Section } from '@/components/FirstExample/Section';
import Menu from '@/components/Menu';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='flex-col items-center h-screen w-screen bg-gray-900'>
      <div className='w-full h-1/5 flex justify-center items-center'>
        <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl p-4 flex flex-col justify-center items-center text-3xl mx-auto my-auto'>
          <Menu />
        </div>
      </div>

      <div className='bg-gray-600 w-1/2 h-1/2 border-white border-4 rounded-3xl p-4 flex flex-col justify-center items-center text-3xl mx-auto my-auto'>
        <Counter setCount={setCount}> Contador {count} </Counter>
        <Section>This is my Section</Section>
        <List
          items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
          render={(item: string) => <span>{item}</span>}
        />
      </div>
    </div>
  );
}
