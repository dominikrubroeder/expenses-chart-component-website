import React from 'react';
import Image from 'next/image';

const ExpensesChartHeader: React.FC = () => {
  return (
    <header className="flex items-center gap-2 flex-wrap py-4 px-6 bg-app-orange rounded-xl z-10 opacity-0 invisible animate-fadeUp animation-delay-1000">
      <div className="grid gap-1 flex-1 text-white">
        <h6 className="text-xs">My balance</h6>
        <h2 className="text-xl font-semibold">$921.48</h2>
      </div>

      <Image src="/images/logo.svg" width={60} height={40} alt="Logo" />
    </header>
  );
};

export default ExpensesChartHeader;
