
import React from 'react';

export enum CardStatus {
  TODO = 'A fazer',
  IN_PROGRESS = 'Fazendo',
  DONE = 'Feito',
}

export interface KanbanCardData {
  id: string;
  icon: React.ElementType;
  title: string;
  tag?: {
    text: string;
    color: 'green' | 'blue' | 'yellow' | 'red';
  };
  date?: string;
  assignee: string;
  status: CardStatus;
}
