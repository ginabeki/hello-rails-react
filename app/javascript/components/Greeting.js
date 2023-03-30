import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/greetingsReducer";
import axios from "axios";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    try {
      await axios.get("api/greetings").then((response) => {
        dispatch(getMessage(response.data));
      });
    } catch (error) {
      console.log(error);
    }
  }  

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>{message}</h1>
      <button
  onClick={() => fetchMessage()}
  style={{
    backgroundColor: "#06b6d4",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  }}
>
  Generate greeting
</button>

    </div>
  );
};

export default Greeting;