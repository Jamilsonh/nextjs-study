import Counter from '@/components/FirstExample/Counter';
import List from '@/components/FirstExample/List';
import { Section } from '@/components/FirstExample/Section';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='flex items-center justify-center h-full w-full bg-gray-900'>
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
