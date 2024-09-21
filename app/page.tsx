import { PasteForm } from '@/components/PasteForm'
import { RecentPastes } from '@/components/RecentPastes'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Create New Paste</h2>
        <PasteForm />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Public Pastes</h2>
        <RecentPastes />
      </div>
    </div>
  )
}