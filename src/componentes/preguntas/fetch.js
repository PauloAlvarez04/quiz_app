import Data from "./preguntas";

export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Data.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(Data)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const response = { status: 200, data: Data[endpoint] };

      resolve(response);
    }, delay);
  });
}

