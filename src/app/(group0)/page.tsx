'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className=" grid place-content-center w-screen h-screen">
      <div className=" flex space-x-5">
        <button
          onClick={() => {
            router.replace('/intercept/1')
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>replac go intercept/1</h2>
        </button>
        <button
          onClick={() => {
            router.push('/intercept/1')
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>push go intercept/1</h2>
        </button>
        <Link
          href="/intercept/1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>link go intercept/1</h2>
        </Link>
      </div>
    </div>
  )
}
