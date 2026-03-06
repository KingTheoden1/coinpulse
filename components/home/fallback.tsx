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

export const CategoriesFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => (
        <div className="animate-pulse">
          <div className="category-skeleton bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1 animate-pulse">
          <div className="coin-skeleton bg-dark-400" />
          <div className="coin-skeleton bg-dark-400" />
          <div className="coin-skeleton bg-dark-400" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell animate-pulse">
          <div className="change-icon bg-dark-400" />
          <div className="value-skeleton-sm bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => (
        <div className="animate-pulse">
          <div className="value-skeleton-md bg-dark-400 rounded-md" />
        </div>
      ),
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => (
        <div className="animate-pulse">
          <div className="value-skeleton-lg bg-dark-400 rounded-md" />
        </div>
      ),
    },
  ];

  return (
    <div id="categories-fallback">
      <h4 className="animate-pulse">Top Categories</h4>

      <DataTable
        columns={columns}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        rowKey={(_, index) => index}
        tableClassName="mt-3"
      />
    </div>
  );
};
