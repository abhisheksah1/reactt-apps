import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

function Comment() {
  const [text, setText] = useState("");

  const handleUpper = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    // console.log(text);
  };

  const handleLower = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    // console.log(text);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    // console.log(text);
  };

  const handleGenerateEmail = () => {
    let newText = "@" + text + text.length;
    setText(newText);
    // console.log(text);
  };

  const handleChange = (e) => {
    // console.log("on Change");
    setText(e.target.value);
  };
  return (
    <>
      <div className="max-w-sm mx-auto container">
        <textarea
          type="text"
          value={text}
          placeholder=""
          onChange={handleChange}
          className="w-full  border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:border-blue-500 mt-10"
        />
        <button
          className="bg-black text-white py-2 px-6 hover:bg-white hover:text-black mt-2 border-2 transition ease-in duration-500"
          onClick={handleUpper}
        >
          Uppercase
        </button>
        <button
          className="bg-black text-white py-2 px-6 hover:bg-white hover:text-black mt-2 border-2 transition ease-in duration-500"
          onClick={handleLower}
        >
          Lowercase
        </button>
        <button
          className="bg-black text-white py-2 px-6 hover:bg-white hover:text-black mt-2 border-2 transition ease-in duration-500"
          onClick={handleGenerateEmail}
        >
          UserName
        </button>
        <button
          className="bg-black text-white py-2 px-6 hover:bg-white hover:text-black mt-2 border-2 transition ease-in duration-500"
          onClick={handleClear}
        >
          Clear Text
        </button>

        <div className="container">
          <p>
            {text.length === 0
              ? "0 words and 0 characters"
              : `${text.split(" ").length} words and ${text.length} characters`}
          </p>
          <p>{0.008 * text.split(" ").length} times</p>
          <p>{text} </p>
        </div>
      </div>
    </>
  );
}

export default Comment;
