"use client";
import Title from "./components/Title";
import ResultTitlle from "./components/ResultTitlle";
import ResultDetails from "./components/ResultDetails";
import DiscountForm from "./components/DiscountForm";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Home() {
  const [result, setresult] = useState({});
  const isResultEmpty = Object.keys(result).length === 0;
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div className="w-2/5 m-auto text-center">
          <Title />
          <ResultTitlle result={result} />
          {!isResultEmpty && (
            <>
              <ResultDetails result={result} />
            </>
          )}
          <DiscountForm result={result} setresult={setresult} />
        </div>
      </main>
      <Toaster />
    </>
  );
}
