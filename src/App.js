import { useState } from "react";
import Res from "./Result";

const SecretNum = Math.floor(Math.random() * 1000 + 1);

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>{SecretNum}</h2>
      <h1 style={{textAlign:'center'}}>Enter the num : </h1>
      <input style={{display: 'block', margin: '0 auto'}} name="val" onChange={(e) => {setValue(e.target.value); e.preventDefault();}} />
      <Res guess={value} actual={SecretNum}/>
    </div>
  );
}

export default App;
