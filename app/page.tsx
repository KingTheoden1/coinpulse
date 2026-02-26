import React from 'react';
import Image from "next/image";
import DataTable from "@/components/DataTable";
// import header from "@/components/Header";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {TrendingUp, TrendingDown} from "lucide-react";
import {fetcher} from "@/lib/coingecko.actions";
import {await} from "react";

const columns: DataTableColumn<TrendingCoin>[] = [
    {
        header: 'Name',
        cellClassName: 'name-cell',
        cell: (coin) => {
            const item = coin.item

            return (
                <Link href={`/coins/${item.id}`} className="flex items-center gap-2">
                    <Image src={item.large} alt={item.name} width={36}
                           height={36} className="rounded-full" />
                    <p>{item.name}</p>
                </Link>
            )
        },
    },
    {
        header: '24 Change',
        cellClassName: 'name-cell',
        cell: (coin) => {
            const item = coin.item;
            const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

            return (
                <div className={cn('price-change', isTrendingUp ?
                'text-green-500' : 'text-red-500')}>
                    <p className="flex items-center gap-1">
                        {isTrendingUp ? (
                            <TrendingUp width={16} height={16}/>
                        ) :
                            <TrendingDown width={16} height={16}/>
                        }
                        {item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                </div>
            )
        }
    },
    { header: 'Price', cellClassName: 'price-cell', cell: (coin) =>
    `$${coin.item.data.price.toLocaleString()}` },
]

const dummyCoins: TrendingCoin[] = [
    {
        item: {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            market_cap_rank: 1,
            thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
            large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
            data: {
                price: 89000,
                price_change_percentage_24h: {
                    usd: 2.5
                }
            }
        }
    },
    {
        item: {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            market_cap_rank: 2,
            thumb: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
            large: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
            data: {
                price: 2600,
                price_change_percentage_24h: {
                    usd: -1.2
                }
            }
        }
    },
    {
        item: {
            id: 'solana',
            name: 'Solana',
            symbol: 'SOL',
            market_cap_rank: 5,
            thumb: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png',
            large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
            data: {
                price: 145,
                price_change_percentage_24h: {
                    usd: 5.7
                }
            }
        }
    }
]

const Page = async () => {
    const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol'
    });

    return <main className="main-container">
        <section className="home-grid">
            <div id="coin-overview">
                <div className="header pt-2">
                    <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
                    <div className="info">
                        <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
                        <h1>{coin.market_data.current_price.usd}</h1>
                    </div>
                </div>
            </div>

            <p>Trending Coins</p>
            <DataTable 
                data={dummyCoins} 
                columns={columns} 
                rowKey={(coin) => coin.item.id}
            />
        </section>

        <section className="w-full mt-7 space-y-4">
            <p>Categories</p>
        </section>
    </main>
}

export default Page