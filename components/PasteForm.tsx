'use client'

import { useState, FormEvent } from 'react'
import { Paste } from '../app/types/paste'

export function PasteForm() {
  const [content, setContent] = useState('')
  const [language, setLanguage] = useState('plaintext')
  const [expiration, setExpiration] = useState('never')
  const [isPublic, setIsPublic] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (content.trim().length === 0) {
      setError('Paste content cannot be empty')
      return
    }

    const newPaste: Omit<Paste, 'id' | 'createdAt'> = {
      content,
      language,
      expiresAt: calculateExpirationTime(expiration),
      isPublic
    }

    try {
      // TODO: Replace with actual API call
      console.log('Submitting paste:', newPaste)
      // const response = await fetch('/api/pastes', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newPaste)
      // })
      // if (!response.ok) throw new Error('Failed to create paste')
      // const data = await response.json()
      // console.log('Paste created:', data)

      // Clear form after successful submission
      setContent('')
      setLanguage('plaintext')
      setExpiration('never')
      setIsPublic(true)
    } catch (err) {
      setError('Failed to create paste. Please try again.')
      console.error(err)
    }
  }

  const calculateExpirationTime = (expiration: string): number | null => {
    if (expiration === 'never') return null
    const now = Date.now()
    switch (expiration) {
      case '1h': return now + 60 * 60 * 1000
      case '1d': return now + 24 * 60 * 60 * 1000
      case '1w': return now + 7 * 24 * 60 * 60 * 1000
      default: return null
    }
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
          <option value="html">HTML</option>
          <option value="css">CSS</option>
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
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Create Paste
      </button>
    </form>
  )
}