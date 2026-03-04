import React from 'react';
import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2 animate-pulse">
        <div className="header-image bg-dark-400" />
        <div className="info">
          <div className="header-line-sm bg-dark-400 rounded-md" />
          <div className="header-line-lg bg-dark-400 rounded-md" />
        </div>
      </div>
      <div className="chart h-90 animate-pulse">
        <div className="chart-skeleton bg-dark-400" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link animate-pulse">
          <div className="name-image bg-dark-400" />
          <div className="name-line bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: '24 Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change animate-pulse">
          <div className="change-icon bg-dark-400" />
          <div className="change-line bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => (
        <div className="animate-pulse">
          <div className="price-line bg-dark-400 rounded-md" />
        </div>
      ),
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4 className="animate-pulse">Trending Coins</h4>
      <div className="trending-coins-table">
        <DataTable
          data={[1, 2, 3, 4, 5, 6]}
          columns={columns}
          rowKey={(i) => i}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
