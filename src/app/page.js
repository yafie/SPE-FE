"use client";
import CurrencyFormat from "@/components/CurrencyFormat";
import RealTimeClock from "@/components/RealTimeClock";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [dataOrderDetails, setDataOrderDetails] = useState();
  let total = 0;

  const getProductDetail = async () => {
    await fetch(" https://spe-academy.spesolution.com/api/recruitment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataOrderDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <main>
      <section className="section1">
        <div className="speBlock">
          <div className="speFont">
            <p className="greenFontStyle" style={{ fontSize: "30px" }}>
              &lt; SPE / FRONTEND &gt;
            </p>
          </div>
          <RealTimeClock />
        </div>
      </section>
      <section className="section2">
        <div className="headerSPEShop">
          <h2>SPE Frontend Shop</h2>
        </div>
        <div className="blockShop">
          <div className="listAllProductsInvoices">
            <div className="blockHeaderListAllProductsInvoices">
              <span
                className="defaultTitleInvoice"
                style={{ width: "60%", textAlign: "center" }}
              >
                <b>PRODUCT</b>
              </span>
              <span className="defaultTitleInvoice" style={{ width: "20%" }}>
                <b>QUANTITY</b>
              </span>
              <span className="defaultTitleInvoice" style={{ width: "20%" }}>
                <b>SUBTOTAL</b>
              </span>
            </div>
            {dataOrderDetails?.map((item) => {
              let subTotal = item.product.price * item.quantity;
              total = total + subTotal;
              return (
                <div
                  key={item.product.code}
                  className="blockBodyListAllProductsInvoices"
                >
                  <span
                    className="blockProductDetails"
                    style={{ width: "60%", textAlign: "left" }}
                  >
                    <img className="imgCover" src={item.product.media_url} />
                    <div className="blockProductDescOrder">
                      <span className="blueSpan">{item.product.code}</span>
                      <h5 className="productName">{item.product.name}</h5>
                      <span className="currency">
                        <CurrencyFormat
                          price={item.product.price}
                          currency="IDR"
                        />
                      </span>
                      <span className="inStock">
                        {item.product.stock} in stock
                      </span>
                    </div>
                  </span>
                  <span className="blockQuantity" style={{ width: "20%" }}>
                    {item.quantity}
                  </span>
                  <span className="blockSubTotal" style={{ width: "20%" }}>
                    <CurrencyFormat price={subTotal} currency="IDR" />
                  </span>
                </div>
              );
            })}

            <div className="blockFooterListAllProductsInvoices">
              <span
                className="defaultTitleInvoice"
                style={{ width: "60%", textAlign: "center" }}
              ></span>
              <span className="defaultTitleInvoice" style={{ width: "20%" }}>
                TOTAL
              </span>
              <span className="defaultTitleInvoice" style={{ width: "20%" }}>
                <CurrencyFormat price={total} currency="IDR" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
