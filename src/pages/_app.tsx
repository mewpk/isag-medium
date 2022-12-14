import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="flex flex-col lg:flex-row min-h-screen antialiased text-black bg-neutral-100 dark:bg-neutral-900 dark:text-white">
        <div className="lg:basis-1/6 order-last lg:order-first">
          <Navbar />
        </div>
        <div className="lg:basis-1/2 flex-1 px-6 lg:px-0">
          <Component {...pageProps} />
        </div>
        <div className="lg:basis-1/4 order-first lg:order-last">
          <Sidebar />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
