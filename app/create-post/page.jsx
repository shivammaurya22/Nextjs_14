'use client';

import { useState } from "react";

export default function CreatePost() {
    const [question, setQuestion] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tagArray = tags.split(',').map((tag) => tag.trim());
        await fetch('/api/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({question, content, tags: tagArray}),
        });

        setQuestion('');
        setContent('');
        setTags('');
    };
    return (
        <form onSubmit={handleSubmit} className="w-1/2 h-3/4 flex flex-col gap-6 items-start bg-[#fff] rounded shadow-lg ml-72">
        <h2 className="font-bold text-4xl text-indigo-600 m-auto mt-2">Post Card</h2>
         <input className="w-3/4 px-4 ml-4 py-2 border border-purple-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-700 focus:border-transparent transition duration-300" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" required />
      <textarea className="w-3/4 ml-4 px-4 py-2 border border-purple-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-700 focus:border-transparent transition duration-300" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Full Answer" required />
      <input className="w-1/2 ml-4 px-4 py-2 border border-purple-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-700 focus:border-transparent transition duration-300" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
      <button className="w-full outline-none hover:bg-purple-700 bg-blue-600 text-white font-bold rounded py-2" type="submit">Create Post</button>
        </form>
    )
}