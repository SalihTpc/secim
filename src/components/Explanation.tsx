import Link from "next/link";
import React from "react";

const Explanation = () => {
  return (
    <div className="text-center my-3">
      <p className="my-3">
        Resmi bir belge değildir ve girdiler kayıt altına alınmamaktadır.
        Partilerden bağımsız, tüm müşahitlerin oy sayımı sırasında hızlı bir
        şekilde kontrol yapabilmelerini kolaylaştırmak amacıyla açık kaynak
        olarak geliştirilmiştir.
      </p>
      <Link
        className="text-2xl underline"
        href="https://github.com/SalihTpc/secim"
      >
        Kaynak
      </Link>
    </div>
  );
};

export default Explanation;
