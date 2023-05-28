"use client";
import React, { useState } from "react";

const Counter = () => {
  const [rte, setRte] = useState<number>(0);
  const [kk, setKk] = useState<number>(0);
  const [gecersiz, setGecersiz] = useState<number>(0);
  return (
    <main className="flex min-h-fit items-start justify-between flex-wrap [&>*]:my-1 mt-2">
      <div className="flex items-center flex-col w-1/2 [&>*]:my-2">
        <h1 className="text-center">Recep Tayip Erdoğan</h1>
        <div className="text-center h-16 w-16 p-2 rounded-full bg-white text-slate-600 flex items-center justify-center">
          <p>{rte}</p>
        </div>
        <div className="flex items-center justify-around [&>*]:mx-2 flex-wrap [&>*]:my-3">
          <button
            className="py-1 px-2 bg-sky-400 rounded-lg"
            onClick={() => setRte((state) => state + 1)}
          >
            Arttır
          </button>
          <button
            className="py-1 px-2 bg-red-400 rounded-lg"
            onClick={() => setRte((state) => state - 1)}
          >
            Azalt
          </button>
          <button
            className="py-1 px-2 bg-green-400 rounded-lg"
            onClick={() => setRte(0)}
          >
            Sıfırla
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col w-1/2 [&>*]:my-2">
        <h1 className="text-center">Kemal Kılıçdaroğlu</h1>
        <div className="text-center h-16 w-16 p-2 rounded-full bg-white text-slate-600 flex items-center justify-center">
          {kk}
        </div>
        <div className="flex items-center justify-around [&>*]:mx-2 flex-wrap [&>*]:my-3">
          <button
            className="py-1 px-2 bg-sky-400 rounded-lg"
            onClick={() => setKk((state) => state + 1)}
          >
            Arttır
          </button>
          <button
            className="py-1 px-2 bg-red-400 rounded-lg"
            onClick={() => setKk((state) => state - 1)}
          >
            Azalt
          </button>
          <button
            className="py-1 px-2 bg-green-400 rounded-lg"
            onClick={() => setKk(0)}
          >
            Sıfırla
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col w-1/2 [&>*]:my-2">
        <h1>Geçersiz</h1>
        <div className="text-center h-16 w-16 p-2 rounded-full bg-white text-slate-600 flex items-center justify-center">
          <p>{gecersiz}</p>
        </div>
        <div className="flex items-center justify-around [&>*]:mx-2 flex-wrap [&>*]:my-3">
          <button
            className="py-1 px-2 bg-sky-400 rounded-lg"
            onClick={() => setGecersiz((state) => state + 1)}
          >
            Arttır
          </button>
          <button
            className="py-1 px-2 bg-red-400 rounded-lg"
            onClick={() => setGecersiz((state) => state - 1)}
          >
            Azalt
          </button>
          <button
            className="py-1 px-2 bg-green-400 rounded-lg"
            onClick={() => setGecersiz(0)}
          >
            Sıfırla
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col w-1/2 [&>*]:my-2">
        <h1>Toplam Kullanılan Oy</h1>
        <div className="text-center h-16 w-16 p-2 rounded-full bg-white text-slate-600 flex items-center justify-center">
          <p>{rte + kk + gecersiz}</p>
        </div>
      </div>
    </main>
  );
};

export default Counter;
