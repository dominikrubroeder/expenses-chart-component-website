import React from 'react';
import ExpensesChartBody from './ExpensesChartBody';
import ExpensesChartHeader from './ExpensesChartHeader';

const ExpensesChart: React.FC = () => {
  return (
    <div className="max-w-sm w-full grid gap-4 p-4 animate-scale">
      <ExpensesChartHeader />
      <ExpensesChartBody />
    </div>
  );
};

export default ExpensesChart;
