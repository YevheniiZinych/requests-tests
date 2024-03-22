import { useState } from "react";
import { useMutation } from "react-query";
import { sendRequest } from "./api/sendRequest";
import { Toaster, toast } from "react-hot-toast";

import "./App.css";

function App() {
  const [requests, setRequests] = useState(0);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const interval = 1000 / requests;

  const { mutate } = useMutation(
    (requests) => {
      setIsLoading(true);

      for (let i = 1; i <= requests; i++) {
        setTimeout(async () => {
          const res = await sendRequest(i);

          setResponse((prev) => [...prev, res]);

          if (i === Number(requests)) {
            setIsLoading(false);
          }
        }, interval);
      }
    },

    {
      onError: (err) => {
        toast.error(err);
        setIsLoading(false);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(requests);

    setResponse([]);
  };

  return (
    <main>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="number"
            min="0"
            max="100"
            value={requests}
            onChange={(e) => {
              setRequests(e.target.value);
            }}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Send request
        </button>
      </form>

      <ul>
        {response.length > 0 &&
          response.map((index) => <li key={index}>{index}</li>)}
      </ul>
    </main>
  );
}

export default App;
