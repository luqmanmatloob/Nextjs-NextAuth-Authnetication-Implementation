"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";




export default function SendMsg() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Note Text are required.");
      return;
    }

    try {
      const res = await fetch("api/tweet", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          email: session.data.user.email  // Here, it should be "email" instead of "emial"

        }),
      });
console.log(id)
      if (res.ok) {

        setTitle('');
        setDescription('');
        console.log("msg send successfuly")
        reloadAndScrollToBottom(); // Call the function to reload and scroll to bottom



      } else {
        throw new Error("Failed to create a Note");
      }
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 bg-[#b8feff] rounded-md"
        type="text"
        placeholder="tweet Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 bg-[#b8feff] rounded-md"
        type="text"
        placeholder="tweet Text"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold rounded-md text-white py-3 px-6 w-fit hover:bg-green-800 active:bg-green-950 cursor-pointer transition duration-300 ease-in-out "
      >
        Done

      </button>
    </form>
  );
}
