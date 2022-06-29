import React from 'react';

const ExpensesChartFooter: React.FC = () => {
  return (
    <footer className="flex items-center justify-between flex-wrap gap-2">
      <div>
        <h6 className="text-neutral-400 text-xs opacity-0 invisible animate-fadeDown animation-delay-1000">
          Total this month
        </h6>
        <h1 className="font-bold text-3xl opacity-0 invisible animate-fadeUp animation-delay-1000">
          $478.33
        </h1>
      </div>

      <div>
        <div className="font-bold opacity-0 invisible animate-fadeToRight animation-delay-1000">
          +2.4%
        </div>
        <h6 className="text-neutral-400 text-xs opacity-0 invisible animate-fadeUp animation-delay-1000">
          from last month
        </h6>
      </div>
    </footer>
  );
};

export default ExpensesChartFooter;
