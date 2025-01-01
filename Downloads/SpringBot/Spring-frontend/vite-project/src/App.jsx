import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Request from "./Components/Request";
import Response from "./Components/Response";
import { fetchChatResponse } from './Components/api';
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <figure class="text-center bg-red-200 -4 rounded">
        <blockquote class="blockquote">
          <p class="h1 fw-bold " style={{ color: 'rgb(253, 148, 55)' }}>ChatBot</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          <cite
            title="Source Title"
            class="d-inline-block typewriter em strong"
            style={{ color: 'rgb(232, 188, 149)' }}
          >
            Feel free to Chat with us
          </cite>
        </figcaption>
      </figure>
      <div className="border-end " style={{ width: '1000px',marginTop: '150px',  }}>
      <Request onSubmit={handleQuestionSubmit} />
      {loading && <h3 style={{ color: 'rgb(253, 148, 55)' }}>Loading...</h3>}
      <Response response={response} />
      </div>

      
    </>
  );
}

export default App;
