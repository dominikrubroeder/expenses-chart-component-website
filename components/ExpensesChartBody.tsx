import React from 'react';
import ExpensesChartFooter from './ExpensesChartFooter';
import ExpensesChartGraph from './ExpensesChartGraph';

const ExpensesChartBody: React.FC = () => {
  return (
    <div className="bg-white rounded-xl pb-8 pt-6 px-6 z-20">
      <h2 className="font-semibold text-xl mb-1">Spending – Last 7 days</h2>

      <ExpensesChartGraph />

      <hr className="my-8 transition-all animate-growWidth" />

      <ExpensesChartFooter />
    </div>
  );
};

export default ExpensesChartBody;
