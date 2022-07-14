import { useState } from "react";
import { doTestStuff, doTestStuff2, rsInit } from "./rs_client";

rsInit();

export default function App() {
  return (
    <div className="App">
        <p>Hello from The Mercato Test App!</p>
        <button onClick={() => doTestStuff()}>create</button>
        <button onClick={() => doTestStuff2()}>list</button>
        <p>Output is visible in the console</p>
    </div>
  );
}
