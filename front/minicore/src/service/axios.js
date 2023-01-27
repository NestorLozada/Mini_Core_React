import axios , {AxiosInstance}from "axios";
const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export async function fetchApi(url, method, body = undefined) {
  try {
    const getResponse = await fetch(apiBaseUrl + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body? JSON.stringify(body): undefined
    });
    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    console.log(error);
  }
}
/*
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });

export default instance;*/