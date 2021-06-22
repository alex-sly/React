// import React from "react";

export const totalPriceItems = (order) => {
  const countToping = order.topping && order.topping.filter((item) => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;
  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = function (summa) {
  return summa.toLocaleString("ru-RU", { style: "currency", currency: "RUB" });
};
