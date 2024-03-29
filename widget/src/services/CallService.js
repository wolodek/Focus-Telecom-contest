class CallService {
  constructor() {}
  call = async (number, router) => {
    let responseStream = await fetch(process.env.VUE_APP_SERVER_URL + "/call", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ number: number })
    });
    let response = await responseStream.json();
    router.push({
      name: "ringing",
      params: { callsId: response.id, number: number }
    });
  };
}
export default new CallService();
