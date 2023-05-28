"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [rte, setRte] = useState<number>(0);
  const [kk, setKk] = useState<number>(0);
  const [gecersiz, setGecersiz] = useState<number>(0);

  const rteArttir = () => {
    setRte((state) => state + 1);
    localStorage.setItem("rte", JSON.stringify(rte + 1));
  };
  const rteAzalt = () => {
    if (rte !== 0) {
      setRte((state) => state - 1);
      localStorage.setItem("rte", JSON.stringify(rte - 1));
    }
  };
  const rteSifirla = () => {
    setRte(0);
    localStorage.setItem("rte", JSON.stringify(0));
  };
  const kkArttir = () => {
    setKk((state) => state + 1);
    localStorage.setItem("kk", JSON.stringify(kk + 1));
  };
  const kkAzalt = () => {
    if (kk !== 0) {
      setKk((state) => state - 1);
      localStorage.setItem("kk", JSON.stringify(kk - 1));
    }
  };
  const kkSifirla = () => {
    setKk(0);
    localStorage.setItem("kk", JSON.stringify(0));
  };
  const gecersizArttir = () => {
    setGecersiz((state) => state + 1);
    localStorage.setItem("gecersiz", JSON.stringify(gecersiz + 1));
  };
  const gecersizAzalt = () => {
    if (gecersiz !== 0) {
      setGecersiz((state) => state - 1);
      localStorage.setItem("gecersiz", JSON.stringify(gecersiz - 1));
    }
  };
  const gecersizSifirla = () => {
    setGecersiz(0);
    localStorage.setItem("gecersiz", JSON.stringify(0));
  };

  useEffect(() => {
    setRte(parseInt(localStorage.getItem("rte") || "0"));
    setKk(parseInt(localStorage.getItem("kk") || "0"));
    setGecersiz(parseInt(localStorage.getItem("gecersiz") || "0"));
  }, []);

  return (
    <main className="flex min-h-fit items-start justify-between flex-wrap [&>*]:my-1 mt-2">
      <div className="flex items-center flex-col w-1/2 [&>*]:my-2">
        <h1 className="text-center">Recep Tayyip Erdoğan</h1>
        <div className="text-center h-16 w-16 p-2 rounded-full bg-white text-slate-600 flex items-center justify-center">
          <p>{rte}</p>
        </div>
        <div className="flex items-center justify-around [&>*]:mx-2 flex-wrap [&>*]:my-3">
          <button
            className="py-2 px-4 bg-sky-400 rounded-lg"
            onClick={rteArttir}
          >
            Arttır
          </button>
          <button
            className="py-2 px-4 bg-red-400 rounded-lg"
            onClick={rteAzalt}
          >
            Azalt
          </button>
          <button
            className="py-2 px-4 bg-green-400 rounded-lg"
            onClick={rteSifirla}
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
            className="py-2 px-4 bg-sky-400 rounded-lg"
            onClick={kkArttir}
          >
            Arttır
          </button>
          <button className="py-2 px-4 bg-red-400 rounded-lg" onClick={kkAzalt}>
            Azalt
          </button>
          <button
            className="py-2 px-4 bg-green-400 rounded-lg"
            onClick={kkSifirla}
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
            className="py-2 px-4 bg-sky-400 rounded-lg"
            onClick={gecersizArttir}
          >
            Arttır
          </button>
          <button
            className="py-2 px-4 bg-red-400 rounded-lg"
            onClick={gecersizAzalt}
          >
            Azalt
          </button>
          <button
            className="py-2 px-4 bg-green-400 rounded-lg"
            onClick={gecersizSifirla}
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
