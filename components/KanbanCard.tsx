import React from 'react';
import type { KanbanCardData } from '../types';
// FIX: Import icon components to use in the color map
import { FlagIcon, ClockIcon, TrophyIcon, DesktopComputerIcon, UsersIcon } from './Icons';

interface KanbanCardProps {
  card: KanbanCardData;
  onCardClick: (card: KanbanCardData) => void;
}

const tagColors = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
};

// FIX: Use a type-safe Map to associate icon components with their color classes, instead of relying on the component's 'name' property.
const iconColorMap = new Map<React.ElementType, string>([
    [TrophyIcon, 'text-orange-500'],
    [DesktopComputerIcon, 'text-blue-500'],
    [UsersIcon, 'text-purple-500'],
]);

const KanbanCard: React.FC<KanbanCardProps> = ({ card, onCardClick }) => {
  const Icon = card.icon;
  // FIX: Look up the color class from the map using the component itself as the key.
  const iconColorClass = iconColorMap.get(Icon) || 'text-gray-500';

  return (
    <div 
        className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 border border-gray-200/50 cursor-pointer"
        onClick={() => onCardClick(card)}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">
            <Icon className={`h-5 w-5 ${iconColorClass}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-adalove-deep-purple">{card.title}</p>
          {card.tag && (
            <div className={`mt-2 inline-block px-2 py-0.5 text-xs font-semibold rounded-md ${tagColors[card.tag.color]}`}>
              {card.tag.text}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
        {card.date && (
            <div className="flex items-center gap-1.5">
                <ClockIcon className="h-3.5 w-3.5 text-gray-400" />
                <span>{card.date}</span>
            </div>
        )}
        {card.assignee && (
            <div className="flex items-center gap-1.5">
                <FlagIcon className="h-3.5 w-3.5 text-gray-400" />
                <span>{card.assignee}</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default KanbanCard;