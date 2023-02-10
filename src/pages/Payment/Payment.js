import React, { useState } from "react";
import "./payment.css";
import { useSelector } from "react-redux";
import Modal from "react-modal";
function Payment() {
  const initialValue = {
    address: "",
    pincode: "",
    phoneNo: "",
    paymentMode: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  let arr = [];
  cart.forEach((element) => {
    arr.push(element.updatedPrice);
  });

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  const conform = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    delete cart[0];
    setModalIsOpen(false);
  };
const handelChange=(e)=>{
  const {name,value}=e.target;
  setFormValue({...formValue,[name]:value});
  console.log(formValue);
}
const handelSubmit=(e)=>{

}

  return (
    <div className="payment_page_div">
      <form className="payment_form" onSubmit={handelSubmit}>
        <div className="mb-3 d-flex justify-content-around">
          <div className="width">
            <label for="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
              name="address"
              type="Text"
              className="form-control"
              value={formValue.address}
              onChange={handelChange}
            />
          </div>
          <div className="width">
            <label for="exampleInputEmail1" className="form-label">
              PinCode
            </label>
            <input
              name="pincode"
              type="number"
              className="form-control"
              value={formValue.pincode}
              onChange={handelChange}
            />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-around">
          <div className="width">
            <label for="exampleInputEmail1" className="form-label">
              Phone No
            </label>
            <input
              type="tel"
              name="phoneNo"
              className="form-control"
              value={formValue.phoneNo}
              onChange={handelChange}
            />
          </div>
          <div className="width">
            <label for="PaymantMode" className="form-label">
              Paymant Mode
            </label>
            <select className="form-select" value={formValue.paymentMode}   onChange={handelChange}>
              <option value="Case On Delevary">Case On Delevary</option>
              <option value="Net Banking"> Net Banking</option>
              <option value="Credit Cards">Credit Cards</option>
              <option value="Debit Card"> Debit Card</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label for="TotalAmount" className="form-label totalAmountLabel">
            Total Amount:
          </label>
          <span>{sum}</span>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" onClick={conform}>
            Submit
          </button>
        </div>
      </form>
      <Modal className="modal-content modal_div" isOpen={modalIsOpen}>
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p className="mb-3 d-flex justify-content-center">Thank You </p>
        </div>
      </Modal>
    </div>
  );
}

export default Payment;
