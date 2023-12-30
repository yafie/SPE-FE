"use client";
import React, { useEffect, useState } from "react";

const CurrencyFormat = ({ price, currency }) => {
  const [exportPrice, setExportPrice] = useState();

  const formatCurrency = (amount, locale, currency) => {
    // Check if the currency is IDR and set the symbol accordingly
    const currencySymbol = currency === "IDR" ? "IDR" : "currency";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencySymbol,
      minimumFractionDigits: 0, // Ensure no decimal places
      maximumFractionDigits: 2, // Maximum 2 decimal places
    }).format(amount);
  };

  useEffect(() => {
    if (currency) {
      const formattedPrice = formatCurrency(price, "id-ID", currency);
      setExportPrice(formattedPrice); // Update the exportPrice state
    }
  }, [price, currency]);

  return <>{exportPrice}</>;
};

export default CurrencyFormat;
