# CoinPulse

CoinPulse is a modern, real-time cryptocurrency tracking platform built with **Next.js 16 (App Router)** and **React 19**. It provides live price updates, market insights, and interactive charts by leveraging the **CoinGecko API** (both REST and WebSockets).

## 🚀 Features

- **Real-time Data Streaming:** Live price updates, trade history, and OHLCV (candlestick) data using CoinGecko WebSockets.
- **Market Overview:** A comprehensive dashboard showing trending coins, top categories, and an overview of the crypto market.
- **Detailed Coin Insights:** In-depth pages for individual coins featuring interactive candlestick charts powered by `lightweight-charts`.
- **Search & Filter:** Easily find coins and navigate through market categories.
- **Responsive Design:** Optimized for both desktop and mobile using **Tailwind CSS 4** and **Radix UI/Shadcn UI** components.
- **Server-Side Rendering (SSR):** Fast initial page loads and SEO optimization using Next.js Server Components and Server Actions.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://reactjs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Charts:** [Lightweight Charts](https://github.com/tradingview/lightweight-charts)
- **Data Fetching:** [SWR](https://swr.vercel.app/), Next.js Server Actions, [Query String](https://github.com/sindresorhus/query-string)
- **API:** [CoinGecko API (REST & WebSockets)](https://www.coingecko.com/en/api)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

- `/app`: Contains the application's routes and pages (Next.js App Router).
- `/components`: Reusable UI components, including specialized components like `CandlestickChart` and `LiveDataWrapper`.
- `/hooks`: Custom React hooks, notably `useCoinGeckoWebSocket` for real-time data handling.
- `/lib`: Utility functions and Server Actions for interacting with the CoinGecko API.
- `/public`: Static assets like icons and images.
- `/constants.ts`: Global constants used throughout the application.

## ⚙️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- A CoinGecko API Key (Demo or Pro)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coinpulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=YOUR_API_KEY
   
   NEXT_PUBLIC_COINGECKO_API_KEY=YOUR_API_KEY
   NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://stream.coingecko.com/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Architecture & How It Works

### Data Flow
The application uses a hybrid approach for data fetching:
- **Server Components:** Initial page data (e.g., market listings, coin metadata) is fetched on the server using Server Actions located in `lib/coingecko.actions.ts`. This ensures fast first-paint times and good SEO.
- **Client Components & WebSockets:** For live updates, the `useCoinGeckoWebSocket` hook establishes a persistent connection to the CoinGecko WebSocket API. This allows for real-time price fluctuations and trade updates without manual refreshing.

### Real-time Visualization
Interactive charts are rendered on the client side using `lightweight-charts`, which consumes the real-time OHLCV data streamed via WebSockets to provide a smooth, professional-grade trading view.

## 📄 License

This project is open-source and available under the MIT License.
