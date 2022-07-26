import { doCreateFile, doFileList, rsInit, doBadAccess } from "./rs_client";

rsInit();

export default function App() {
  return (
    <div>
        <h2>Hello from The Mercato Test App!</h2>
        <p>This page helps you test the privacy guarantees that Mercato enforces on apps</p>
        <p>Before seeing this page you should have been asked by Mercato to log into your RS account</p>
        <h2>Let's test Mercato!</h2>
        <p><b>1.</b> To show that Mercato allows apps to access your RS data, log into 
          that same RS server using the RS widget above and see that it works.</p>
        <button onClick={() => doCreateFile()}>create a file in RS</button>
        <button onClick={() => doFileList()}>list files in RS</button>
        <p><b>2.</b> Network access to any other domain should always fail. So the button below should always fail.</p>
        <button onClick={() => doBadAccess()}>Attempt access to another domain</button>
        <p><b>3.</b> Mercato only allows access to the RS server you initially logged into - any other RS servers should be blocked in mercato apps. You can test this by disconnecting the RS widget above and connecting to a different RS server that Mercato doesn't know about.</p>
        <h2>Questions?</h2>
        <p>You can find the source code for this text at <a href="https://github.com/ssisk/mercato-example">https://github.com/ssisk/mercato-example</a></p> 
        <p>More details on the network access attempted and a record of it failing can be found in your browser's developer console.</p>
    </div>
  );
}
