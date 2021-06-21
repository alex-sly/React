// import React from "react";

export const totalPriceItems = (order) => order.price * order.count;

export const formatCurrency = function (summa) {
  return summa.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });
};
