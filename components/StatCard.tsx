import React from 'react';

interface StatCardProps {
  // FIX: Changed icon prop type from React.ReactNode to React.ReactElement to allow cloning with new props.
  icon: React.ReactElement;
  title: string;
  value: string;
  subValue?: string;
  valueLabel?: string;
  subValueLabel?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subValue, valueLabel, subValueLabel }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 border border-gray-200">
      <div className="text-gray-400 w-8 h-8">
        {React.cloneElement(icon, { className: "w-8 h-8" })}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500">{title}</p>
        {subValue ? (
          <div className="flex items-end gap-6 mt-1">
            <div>
              <p className="text-2xl font-bold text-adalove-deep-purple">{value}</p>
              <p className="text-xs text-gray-400">{valueLabel}</p>
            </div>
            <div className="border-l border-gray-200 pl-6">
              <p className="text-2xl font-bold text-adalove-deep-purple">{subValue}</p>
               <p className="text-xs text-gray-400">{subValueLabel}</p>
            </div>
          </div>
        ) : (
          <p className="text-2xl font-bold text-adalove-deep-purple mt-1">{value}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;