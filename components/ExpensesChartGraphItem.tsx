import React from 'react';

interface ExpensesChartGraphItemProps {
  data: { day: string; amount: number };
  highest: boolean;
}

const ExpensesChartGraphItem: React.FC<ExpensesChartGraphItemProps> = (
  props
) => {
  const item = props.data;
  const highest = props.highest;

  return (
    <div className="group w-full">
      <div className="absolute left-0 top-0 grid gap-0 invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible">
        <p className="text-md leading-none">{item.amount}%</p>
        <p className="text-xs text-neutral-400">{item.day}</p>
      </div>
      <div className="text-center">
        <div
          className={`flex justify-end flex-col mb-2 h-40 w-full rounded-md ${
            highest
              ? 'group-hover:bg-app-teal/10'
              : 'group-hover:bg-app-orange/10'
          }`}
        >
          <div
            className={`${
              highest ? 'bg-app-teal' : 'bg-app-orange'
            } rounded-md transition-all animate-growHeight hover:scale-105`}
            style={{ height: `${item.amount}%` }}
          ></div>
        </div>
        <p className="text-xs text-neutral-400">{item.day}</p>
      </div>
    </div>
  );
};

export default ExpensesChartGraphItem;
