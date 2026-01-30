
import React from 'react';
import KanbanColumn from './KanbanColumn';
import { KanbanCardData, CardStatus } from '../types';
import { TrophyIcon, DesktopComputerIcon, UsersIcon } from './Icons';

const mockCards: KanbanCardData[] = [
  {
    id: '1',
    icon: TrophyIcon,
    title: 'Eu sou um card de autoestudo ponderado',
    assignee: 'Sergio José Venancio Júnior',
    status: CardStatus.TODO,
    tag: {
        text: 'Atividade ponderada',
        color: 'green'
    }
  },
  {
    id: '2',
    icon: DesktopComputerIcon,
    title: 'Workshop de Git e Gitlab',
    assignee: 'Sergio José Venancio Júnior',
    date: '26/01/2026 - 09:00h',
    status: CardStatus.TODO,
  },
  {
    id: '3',
    icon: TrophyIcon,
    title: 'Eu sou um outro card de autoestudo',
    assignee: 'Sergio José Venancio Júnior',
    status: CardStatus.TODO,
  },
  {
    id: '4',
    icon: UsersIcon,
    title: 'Workshop de Adalove',
    assignee: '', // No assignee in image
    date: '27/01/2026 - 09:00h',
    status: CardStatus.IN_PROGRESS,
  },
  {
    id: '5',
    icon: TrophyIcon,
    title: 'Eu sou um card de autoestudo',
    assignee: 'Sergio José Venancio Júnior',
    status: CardStatus.DONE,
  },
];

interface KanbanBoardProps {
  onCardClick: (card: KanbanCardData) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ onCardClick }) => {
  const todoCards = mockCards.filter(card => card.status === CardStatus.TODO);
  const inProgressCards = mockCards.filter(card => card.status === CardStatus.IN_PROGRESS);
  const doneCards = mockCards.filter(card => card.status === CardStatus.DONE);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      <KanbanColumn title="A fazer" cards={todoCards} onCardClick={onCardClick} />
      <KanbanColumn title="Fazendo" cards={inProgressCards} onCardClick={onCardClick} />
      <KanbanColumn title="Feito" cards={doneCards} onCardClick={onCardClick} />
    </div>
  );
};

export default KanbanBoard;
