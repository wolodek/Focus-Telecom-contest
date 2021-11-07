import io from "socket.io-client";
import router from "../router";
class ViewManager {
  constructor() {
    this.status = null;
    this.socket = null;
  }
  async changeView(callsId) {
    switch (this.status) {
      case "CONNECTED":
        router.push({ name: "connected", params: { callsId: callsId } });
        break;
      case "FAILED":
        router.push({ name: "failed", params: { callsId: callsId } });
        break;
      case "ANSWERED":
        router.push({ name: "answered", params: { callsId: callsId } });
    }
  }
  checkStatus(callsId) {
    this.socket = io(process.env.VUE_APP_SERVER_URL, {
      reconnection: false,
      transports: ["websocket", "polling"]
    });
    this.socket.on("status", status => {
      this.status = status;
      this.changeView(callsId);
    });
  }
  stopListening() {
    this.socket.disconnect();
  }
}
export default new ViewManager();
