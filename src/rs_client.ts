import RemoteStorage from "remotestoragejs";
import Widget from "remotestorage-widget";

let __rs: RemoteStorage | undefined;

const checkedGetRs = () => {
  if (!__rs) {
    throw new Error("You need to init first!");
  }
  return __rs;
};

const mercatoTestScope = "/mercato-test/";
const widgetHomeId = "rs-widget-home";

export const rsInit = () => {
  if (!__rs) {
    console.log("initing RS");
    __rs = new RemoteStorage();
    const rs = checkedGetRs();
    rs.access.claim("mercato-test", "rw");
    rs.caching.enable(mercatoTestScope);

    // clears element so we don't get repeated widgets
    // when doing HMR
    const element = document.getElementById(widgetHomeId);
    if (element) {
      element.innerHTML = "";
    }

    const widget = new Widget(rs);
    widget.attach(widgetHomeId);

    rs.on("connected", function() {
      console.log("successful connect");
    });
    rs.on("not-connected", () => {
      console.log("not-connected: no RS user");
    });
    rs.on("ready", () => {
      console.log("RS ready");
    });
    rs.on("network-online", () => {
      console.log("RS: network connection back online");
    });
    rs.on("error", (err: any) => console.log("err", err));
  }
};

export const doTestStuff = () => {
  const rs = checkedGetRs();
  const client = rs.scope(mercatoTestScope);
  const content = "This is a test, it is only a test!.";
  const filename = `testfile${crypto.randomUUID()}.txt`
  client.storeFile("text/plain", filename, content)
    .then(() => console.log("Created",filename));
};

export const doTestStuff2 = () => {
  const rs = checkedGetRs();
  const client = rs.scope(mercatoTestScope);
  client.getAll("").then(l => console.log(l));
};
