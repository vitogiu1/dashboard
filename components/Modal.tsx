
import React from 'react';
import type { KanbanCardData } from '../types';
import logo from "./logo.jpeg";
import { 
    XMarkIcon, 
    BookOpenIcon, 
    UserIcon, 
    PresentationChartLineIcon, 
    CheckBadgeIcon, 
    ListBulletIcon,
    LinkIcon,
    ChevronDownIcon
} from './Icons';

interface ModalProps {
  card: KanbanCardData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
  const tabs = ["Conteúdo", "Material de estudo", "Vídeo de estudo", "Avaliação", "Organização", "Feedback"];
  const activeTab = "Conteúdo";

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-adalove-gray rounded-xl w-full max-w-4xl max-h-[95vh] overflow-y-auto p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Fechar modal"
        >
          <XMarkIcon className="h-7 w-7" />
        </button>

        <header className="mb-6">
            <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-md">
                    <BookOpenIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-adalove-deep-purple">Autoestudo</h2>
                </div>
            </div>
            <p className="mt-2 text-lg text-gray-600">{card.title}</p>
        
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-adalove-deep-purple">
                    <UserIcon className="h-5 w-5" />
                    <span>{card.assignee}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-green-800 bg-green-200 px-3 py-1 rounded-full">
                    <PresentationChartLineIcon className="h-5 w-5" />
                    <span>Atividade ponderada: 3 pontos</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-white bg-adalove-deep-purple px-3 py-1 rounded-full">
                    <CheckBadgeIcon className="h-5 w-5" />
                    <span>Atividade obrigatória</span>
                </div>
<div className="relative flex items-center">
  {/* Balão */}
  <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2">
    <div className="relative bg-white text-adalove-deep-purple text-sm font-medium px-4 py-2 rounded-lg shadow-md border border-gray-200 whitespace-nowrap">
      Eu sou a Ada,<br></br> venha estudar comigo! 💜

      {/* Setinha */}
      <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 
        border-t-8 border-b-8 border-l-8 
        border-t-transparent border-b-transparent border-l-white">
      </div>
    </div>
  </div>

  {/* Avatar */}
  <img
    src={logo}
    alt="Ada"
    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover bg-white cursor-pointer hover:scale-105 transition-transform"
  />
</div>

            </div>
        </header>

        <main className="bg-white rounded-xl p-6 shadow-inner">
            <nav className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                            tab === activeTab 
                            ? 'bg-adalove-deep-purple text-white' 
                            : 'bg-gray-100 text-adalove-deep-purple hover:bg-gray-200'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <section>
                <div className="flex items-center gap-2">
                    <ListBulletIcon className="h-5 w-5 text-adalove-deep-purple" />
                    <h3 className="text-lg font-bold text-adalove-deep-purple">Descrição</h3>
                </div>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                    Neste card, você encontrará instruções sobre a atividade a ser realizada. Ele pode conter um link de conteúdo, mas você deve ficar atento(a) ao que é pedido na questão. Algumas vezes, esses cards não possuem a questão definida, mas o professor responsável orientará você sobre o que deve entregue.
                    <a href="#" className="text-adalove-pink font-semibold ml-2 hover:underline">Ver mais</a>
                </p>
            </section>

            <section className="mt-8">
                <div className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-adalove-deep-purple" />
                    <h3 className="text-lg font-bold text-adalove-deep-purple">Conteúdos relacionados</h3>
                </div>
                <ul className="mt-2 list-disc list-inside">
                    <li>
                        <a href="#" className="text-blue-600 hover:underline text-sm">Eu sou um card de autoestudo ponderado</a>
                    </li>
                </ul>
            </section>
        </main>
        
        <footer className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-adalove-deep-purple mb-2">Mover cartão:</p>
          <div className="flex flex-wrap items-end gap-4">
              <div className="flex-grow">
                  <label htmlFor="coluna" className="block text-xs text-gray-500 mb-1">Coluna *</label>
                  <div className="relative">
                    <select id="coluna" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-sm appearance-none focus:ring-adalove-pink focus:border-adalove-pink">
                        <option>A fazer</option>
                        <option>Fazendo</option>
                        <option>Feito</option>
                    </select>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none" />
                  </div>
              </div>
              <div className="w-24">
                  <label htmlFor="posicao" className="block text-xs text-gray-500 mb-1">Posição *</label>
                  <input type="number" id="posicao" defaultValue="3" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-adalove-pink focus:border-adalove-pink" />
              </div>
              <button className="bg-adalove-pink text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
                  Mudar
              </button>
          </div>
        </footer>

      </div>
        <div className="absolute bottom-4 right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:right-[-80px]">
             <button onClick={onClose} className="bg-white text-adalove-pink border border-adalove-pink px-8 py-2 rounded-md text-sm font-semibold hover:bg-red-50 transition-colors">
                Fechar
            </button>
        </div>
    </div>
  );
};

export default Modal;
