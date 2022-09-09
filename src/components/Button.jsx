import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px]`}
    >
      <a href="https://google.com"> Get Started</a>
    </button>
  );
}

export default Button;
