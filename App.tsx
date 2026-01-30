
import React, { useState } from 'react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import KanbanBoard from './components/KanbanBoard';
import Modal from './components/Modal';
import { KanbanCardData } from './types';
import { 
  CalendarIcon, 
  UserCircleIcon, 
  AcademicCapIcon, 
  UserRemoveIcon, 
  CheckCircleIcon, 
  SearchIcon, 
  ClockIcon,
  ChevronDownIcon
} from './components/Icons';

const App: React.FC = () => {
  const tabs = ["Minhas atividades", "Atividades por unidade", "Notas", "Faltas", "Grupo", "Parceiro"];
  const activeTab = "Atividades por unidade";

  const [selectedCard, setSelectedCard] = useState<KanbanCardData | null>(null);

  const handleCardClick = (card: KanbanCardData) => {
    // Only open the modal for the specific card as requested
    if (card.id === '1') {
      setSelectedCard(card);
    }
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="font-sans text-adalove-deep-purple relative">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
        <h1 className="text-3xl font-bold text-adalove-deep-purple">Vida acadêmica</h1>
        
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-adalove-deep-purple">Turmas</h2>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="relative flex-grow">
              <CheckCircleIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              <input 
                type="text" 
                defaultValue="Boas Vindas aos calouros 2026"
                className="w-full pl-10 pr-10 py-2 border-transparent bg-adalove-deep-purple text-white rounded-md focus:ring-adalove-pink focus:border-adalove-pink"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-adalove-deep-purple text-white px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap hover:opacity-90 transition-opacity">
              <ClockIcon className="h-5 w-5" />
              Horários de check-in
            </button>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-adalove-deep-purple">Informações Gerais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <StatCard icon={<CalendarIcon />} title="Iniciado em:" value="26/01/2026" />
            <StatCard icon={<UserCircleIcon />} title="Orientação:" value="Sergio José Venancio Júnior" />
            <StatCard icon={<AcademicCapIcon />} title="Notas:" value="0.00" subValue="0.00" valueLabel="Acumulada" subValueLabel="Aproveitamento" />
            <StatCard icon={<UserRemoveIcon />} title="Faltas:" value="40.00%" />
          </div>
        </section>
        
        <section className="mt-8">
          <div className="bg-adalove-pink rounded-t-lg">
            <nav className="-mb-px flex flex-wrap items-center text-white">
              {tabs.map(tab => (
                <a 
                  key={tab} 
                  href="#" 
                  className={`px-4 py-3 font-medium ${tab === activeTab ? 'bg-adalove-deep-purple rounded-t-lg flex items-center gap-1' : 'hover:bg-red-500/80'}`}
                >
                  {tab}
                  {tab === activeTab && (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </a>
              ))}
            </nav>
          </div>

          <div className="bg-white p-6 rounded-b-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 border-b border-gray-200 pb-6">
              <div className="flex flex-col">
                <label className="text-xs text-adalove-deep-purple mb-1">Buscar por atividade</label>
                <input type="text" className="w-full border-0 border-b border-gray-300 focus:border-adalove-pink focus:ring-0 px-0 py-1" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-adalove-deep-purple mb-1">Tipos de atividade</label>
                <div className="relative">
                  <select className="w-full border-0 border-b border-gray-300 focus:border-adalove-pink focus:ring-0 px-0 py-1 bg-white appearance-none pr-8">
                    <option>Todos os tipos</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                    <ChevronDownIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-adalove-deep-purple mb-1">Tags</label>
                 <input type="text" className="w-full border-0 border-b border-gray-300 focus:border-adalove-pink focus:ring-0 px-0 py-1" />
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center pt-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <label className="flex items-center text-sm text-adalove-deep-purple cursor-pointer">
                  <input type="checkbox" className="appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-adalove-pink checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adalove-pink relative" />
                  <span className="ml-2">Apenas atividades avaliadas</span>
                </label>
                <label className="flex items-center text-sm text-adalove-deep-purple cursor-pointer">
                  <input type="checkbox" className="appearance-none h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-adalove-pink checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adalove-pink relative" />
                   <span className="ml-2">Apenas atividades ponderadas</span>
                </label>
              </div>
              <button className="text-sm text-gray-500 hover:underline mt-2 sm:mt-0">Limpar filtros</button>
            </div>
          </div>
        </section>
        
        <section className="mt-8">
            <h2 className="text-xl font-bold text-adalove-deep-purple">Semana 01</h2>
            <KanbanBoard onCardClick={handleCardClick} />
        </section>

      </main>

      {selectedCard && <Modal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
