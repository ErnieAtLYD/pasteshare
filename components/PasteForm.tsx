'use client'

import { useState } from 'react'

export function PasteForm() {
  const [content, setContent] = useState('')
  const [language, setLanguage] = useState('plaintext')
  const [expiration, setExpiration] = useState('never')
  const [isPublic, setIsPublic] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement paste creation logic
    console.log({ content, language, expiration, isPublic })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          className="w-full h-64 p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your code or text here..."
          required
        />
      </div>
      <div>
        <select
          className="w-full p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="plaintext">Plain Text</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div>
        <select
          className="w-full p-2 border rounded"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
        >
          <option value="never">Never</option>
          <option value="1h">1 Hour</option>
          <option value="1d">1 Day</option>
          <option value="1w">1 Week</option>
        </select>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            className="mr-2"
          />
          Make this paste public
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Create Paste
      </button>
    </form>
  )
}