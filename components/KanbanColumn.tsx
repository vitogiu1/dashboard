
import React from 'react';
import { KanbanCardData } from '../types';
import KanbanCard from './KanbanCard';
import { PlusIcon } from './Icons';

interface KanbanColumnProps {
  title: string;
  cards: KanbanCardData[];
  onCardClick: (card: KanbanCardData) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, cards, onCardClick }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-adalove-deep-purple">{title}</h3>
        <button className="text-gray-500 hover:text-adalove-deep-purple transition-colors">
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="space-y-4">
        {cards.map(card => (
          <KanbanCard key={card.id} card={card} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
