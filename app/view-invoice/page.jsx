import React from "react";
import Image from "next/image";
import "../../styles/styles.css";

export default function ViewInvoice() {
  return (
    <>
      <div className="viewInVoiceContainer">

        <div className="back">
          <Image src="./back.svg" alt="" width={24} height={24} />
          <a href="#">Go Back</a>
        </div>

        <div className="statusSection">
          <h3>Status</h3>

          <div className="status">
            <span className="recentStatus">Pending</span>
          </div>
        </div>

        <div className="information">
          <div className="Id">
            <h3>
              <span>#XM9141</span>
            </h3>
          </div>

          <div className="title">
            <p>
              <span>Graphic Design</span>
            </p>
          </div>

          <div className="addres">
            <p>
              <span>19 Union Terrace</span>
            </p>
            <p>
              <span>London</span>
            </p>
            <p>
              <span>E1 3EZ</span>
            </p>
            <p>
              <span>United Kingdom</span>
            </p>
          </div>

          <div className="billInfo">
            <div className="Dates">
              <div className="paymentSection">
                <div className="invoiceDate">
                  <p>
                    <span>Invoice Date</span>
                  </p>
                  <h3>
                    <span>19 Aug 2021</span>
                  </h3>
                </div>

                <div className="paymentDue">
                  <p>
                    <span>Payment Due</span>
                  </p>
                  <h3>
                    <span>19 Aug 2021</span>
                  </h3>
                </div>
              </div>

              <div className="billTo">
                <p>
                  <span>Bill To</span>
                </p>
                <h3>
                  <span>Jonathan Doe</span>
                </h3>
                <p>
                  <span>19 Union Terrace</span>
                </p>
                <p>
                  <span>London</span>
                </p>
                <p>
                  <span>E1 3EZ</span>
                </p>
                <p>
                  <span>United Kingdom</span>
                </p>
              </div>
            </div>

            <div className="sentTo">
              <p>Sent To</p>
              <h3>
                <span>alexgrim@mail.com</span>
              </h3>
            </div>

            <div className="paymentProduct">
              <div className="productName">
                <h5>
                  <span>Banner Design</span>
                </h5>
              </div>

              <div className="priceContainer">
                <div className="quantityPriceTotal">
                  <div className="quantity">
                    <p>
                      <span>1x</span>
                    </p>
                  </div>

                  <div className="price">
                    <p>
                      <span>£156.00</span>
                    </p>
                  </div>
                </div>

                <div className="totalProducts">
                  <p>
                    <span>£156.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grandTotal">
            <h3>
              <span>Grand Total</span>
            </h3>
            <h3>
              <span>£ 156.00</span>
            </h3>
          </div>

        </div>
      </div>
    </>
  );
}
