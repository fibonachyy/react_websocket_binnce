import { useEffect, useState } from "react";
var WebSocket = require("websocket").w3cwebsocket;

const initialSymbolList = {
  ETHUSDT: {},
  BTCUSDT: {},
  ADAUSDT: {},
};
const SocketHook = () => {
  const [updatedPrice, setUpdatedPrice] = useState(initialSymbolList);

  useEffect(() => {
    initialSocket();
  }, []);

  function initialSocket() {
    var socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!miniTicker@arr"
    );

    // When message received from web socket then...
    socket.onmessage = function (event) {
      // Easier and shorter.
      const data = JSON.parse(event.data);
      const priceList = checkAndUpdatePrice(data);

      setUpdatedPrice({ ...Object.assign(updatedPrice, priceList) });
      // "x" means: Is this kline closed? Return "true" if closed. Closed means new line to be added.
    };
  }

  function checkAndUpdatePrice(data) {
    let result = {};
    for (let kline of data) {
      if (!updatedPrice[kline.s]) continue;
      result = { ...result, [kline.s]: { ...kline } };
    }
    return result;
  }

  return [updatedPrice];
};

export default SocketHook;
