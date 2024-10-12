export function RecentPastes() {
    // This is a placeholder for recent pastes
    const recentPastes = [
      { id: '1', title: 'Example Paste 1', language: 'javascript' },
      { id: '2', title: 'Example Paste 2', language: 'python' },
      { id: '3', title: 'Example Paste 3', language: 'plaintext' },
    ]
  
    return (
      <ul className="space-y-2">
        {recentPastes.map((paste) => (
          <li key={paste.id} className="border p-2 rounded">
            <a href={`/paste/${paste.id}`} className="text-blue-600 hover:underline">
              {paste.title}
            </a>
            <span className="ml-2 text-sm text-gray-500">{paste.language}</span>
          </li>
        ))}
      </ul>
    )
  }