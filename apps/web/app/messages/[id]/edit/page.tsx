'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EditMessagePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [text, setText] = useState('');
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-indigo-300">
            Edit Message
          </h1>
          <Link href="/chat" className="text-indigo-300 hover:text-indigo-200">
            Back to Chat
          </Link>
        </div>
        <div className="text-sm text-gray-400 mb-2">Message ID: {id}</div>
        <textarea
          className="w-full rounded-md bg-gray-800 border border-gray-700 p-3 outline-none focus:border-indigo-500"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Edit your message..."
        />
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => router.push('/chat')}
            className="px-3 py-2 rounded-md bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-600/40"
          >
            Save Changes
          </button>
          <button
            onClick={() => router.back()}
            className="px-3 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
