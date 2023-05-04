import Personagens from '@/components/StarWars/Personagens';
import useStarWars from '@/data/hooks/useStarWars';

export default function PaginaStarWars() {
  const { processando, personagens, obterPersonagens } = useStarWars();

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-full w-full bg-gray-900'>
      <button onClick={obterPersonagens} className='bg-blue-500 p-2'>
        Obter
      </button>
      <div className='bg-gray-600 w-1/2 h-3/5 border-white border-4 rounded-3xl p-4 flex flex-col justify-center items-center text-3xl mx-auto '>
        {processando ? (
          <div>Processando...</div>
        ) : personagens.length > 0 ? (
          <Personagens personagens={personagens} />
        ) : (
          <div>Nenhum personagem</div>
        )}
      </div>
    </div>
  );
}
