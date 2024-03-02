import fetch from "cross-fetch";

type BodyObject = { [k: string]: unknown };

const encodeBody = (body: BodyObject) => {
  return JSON.stringify(body);
};

const makeRequest = async (
  path: string,
  info: Omit<RequestInit, "url" | "headers">
) => {
  try {
    const response = await fetch(`https://api.mock.turpal.com/api${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...info,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    return Promise.reject(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const post = (path: string, body: BodyObject = {}) => {
  return makeRequest(path, {
    method: "POST",
    body: encodeBody(body),
  });
};

export const get = (path: string) => {
  return makeRequest(path, {
    method: "GET",
  });
};
