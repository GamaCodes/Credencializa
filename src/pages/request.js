/*

import React, { useState } from "react";
import Banner from "../components/Banner";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  limit,
  orderBy,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Request = () => {
  const initialValues = {
    email: "",
    name: "",
    date: "",
    status: "",
    curp: "",
    phone: "",
    city: "",
    suburb: "",
    office: "",
    payment: "",
    record: "",
    customer_id: "",
    id: "",
  };

  const [values, setValues] = useState(initialValues);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [newCustomerId, setNewCustomerId] = useState("");

  const notify = (id) =>
    toast.success(`Registro Exitoso - Folio ${id}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const createFolio = async () => {
    const customer = query(
      collection(db, "customers"),
      limit(1),
      orderBy("id", "desc")
    );
    const querySnapshot = await getDocs(customer);
    querySnapshot.forEach((doc) => {
      const docID = doc.id;
      const newFolio = Number(docID) + 1;

      setId(newFolio.toString());
      const requestDate = new Date();
      const requestDay = requestDate.getDate();
      const requestMonth = requestDate.getMonth();

      setDate(requestDate);
      setDay(requestDay);
      setMonth(requestMonth);

      setNewCustomerId(`${id}-${day}-${month}`);
    });
  };

  const addCustomer = async () => {
    // para el primer registro usar el numero 100000 en lugar de id
    createFolio();
    try {
      await setDoc(doc(db, "customers", id), {
        email: values.email,
        name: values.name,
        date: date,
        status: values.status,
        curp: values.curp,
        phone: values.phone,
        city: values.city,
        suburb: values.suburb,
        office: values.office,
        payment: values.payment,
        record: values.record,
        customer_id: newCustomerId,
        id: id,
      });

      notify(newCustomerId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFolio();
    addCustomer(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Banner home={false} />
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <p>Solicitud en linea</p>
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Correo"
                name="email"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Nombre"
                name="name"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Estatus"
                name="status"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="CURP"
                name="curp"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Telefono"
                name="phone"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Municipio"
                name="city"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Estado"
                name="suburb"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Sucursal"
                name="office"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Via de pago"
                name="payment"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Soporte"
                name="record"
              />
            </div>

            <button>Enviar</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Request;

*/
