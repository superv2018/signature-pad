import React, { useState, useRef } from 'react';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import  './sigCanvas.css';
import './App.css';

const App = () => {
  const [photoURL, setPhotoURL] = useState(null);
  const sigCanvas = useRef({});

  /* A function that clears the canvas using useRef*/
  const clear = () => sigCanvas.current.clear();

  /* A function that trims white space off the canvas by useing useRef funtion*/
  const save = () => setPhotoURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>A Signature Pad App</h1>
      <Popup modal 
      trigger={<button>Open Signature Pad</button>}
      closeOnDocumentClick={false}
      >
        {close => (
          <>
        
          <SignaturePad 
            ref={sigCanvas}
          canvasProps={{
            className: "signatureCanvas"
          }}
          />
          <button onClick={save}>Save</button>
          <button onClick={clear}>Clear</button>
          <button onClick={close}>Close</button>
          </>
          )}
      </Popup>
      <br></br>
      {photoURL ? (
        <img
          src={photoURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "20px auto",
            border: "1px solid black",
            width: "500px"
          }}
          />
      ): null}
    </div>
  );
}

export default App;
