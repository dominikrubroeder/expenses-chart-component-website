import React from 'react';
import chartData from '../data';
import ExpensesChartGraphItem from './ExpensesChartGraphItem';

const ExpensesChartGraph: React.FC = (props) => {
  const highest = Math.max(...chartData.map((item) => item.amount));

  return (
    <div className="relative w-full flex justify-between gap-3">
      {chartData.map((item, index) => (
        <ExpensesChartGraphItem
          key={index}
          data={item}
          highest={item.amount === highest}
        />
      ))}
    </div>
  );
};

export default ExpensesChartGraph;
