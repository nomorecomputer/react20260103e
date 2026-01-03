import { useEffect, useRef, useState } from "react";
import axios from "axios";
//step6
import { Modal } from "bootstrap";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //step4
  const modalRef = useRef(null);
  const modalJSObject = useRef(null);

  // step10
  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api", {
      baseURL: "",
    });

    const { results } = response.data;
    console.dir(results);
    openModal();
    setTimeout(() => {
      closeModal();
    }, 2000);
  };
  //step8
  const openModal = () => {
    modalJSObject.current.show();
  };
  //step12
  //step8
  const closeModal = () => {
    modalJSObject.current.hide();
  };

  //step7
  useEffect(() => {
    console.log(modalRef.current);
    modalJSObject.current = new Modal(modalRef.current);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        // step2
        // data-bs-toggle="modal"
        // data-bs-target="#exampleModal"

        //step9
        onClick={() => openModal()}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        //step3
        // id="exampleModal"

        //step5
        ref={modalRef}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="{modalRef}"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
