class ToggleFakeApiService {
  constructor() {}
  toggle = async isApiFake => {
    let responseStream = await fetch(process.env.VUE_APP_SERVER_URL + "/fakeapi", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ isApiFake: isApiFake })
    });
    let response = await responseStream.json();
    let result = response;
    return result.isApiFake;
  };
  getStatus = async () => {
    let responseStream = await fetch(process.env.VUE_APP_SERVER_URL + "/apistatus", {
      method: "GET"
    });
    let response = await responseStream.json();
    return response.isApiFake;
  };
}
export default new ToggleFakeApiService();
