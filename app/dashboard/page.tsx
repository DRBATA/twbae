import React from 'react';
import Image from 'next/image';

// Mock data for Gold user
const user = {
  name: 'Alex Gold',
  status: 'Gold',
  avatarUrl: '/avatar-gold.png',
  plasticSaved: 37,
  slotsAvailable: 2,
  slotsBooked: 1,
  hostedParties: [
    {
      id: 1,
      date: '2025-05-04',
      location: 'Sara\'s Villa, Dubai',
      qrCodeUrl: '/qr-party-1.png',
    },
    {
      id: 2,
      date: '2025-05-11',
      location: 'HeliPad Frozen Cherry',
      qrCodeUrl: '/qr-party-2.png',
    },
  ],
  tickets: [
    {
      id: 1,
      event: 'Signature Morning Party',
      date: '2025-05-11',
      qrCodeUrl: '/qr-ticket-1.png',
    },
  ],
  rewardsProgress: 80, // percent
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Image src={user.avatarUrl} alt="Avatar" width={56} height={56} className="rounded-full border-4 border-yellow-400" />
          <div>
            <div className="text-xl font-bold">Welcome, {user.name}!</div>
            <div className="text-yellow-600 font-semibold">{user.status} Member</div>
          </div>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Log out</button>
      </header>

      {/* Booking Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Signature Event Booking</h2>
        <div className="flex gap-4">
          {[...Array(user.slotsAvailable)].map((_, i) => (
            <button
              key={i}
              className={`px-6 py-4 rounded-lg border-2 ${i < user.slotsBooked ? 'bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed' : 'bg-yellow-100 border-yellow-400 text-yellow-700 hover:bg-yellow-200'}`}
              disabled={i < user.slotsBooked}
            >
              {i < user.slotsBooked ? 'Booked' : `Book Slot ${i + 1}`}
            </button>
          ))}
        </div>
      </section>

      {/* Home Parties Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Your Hosted Home Parties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.hostedParties.map((party) => (
            <div key={party.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
              <div>
                <div className="font-semibold">{party.location}</div>
                <div className="text-sm text-gray-500">{party.date}</div>
              </div>
              <div className="ml-auto">
                <Image src={party.qrCodeUrl} alt="QR Code" width={60} height={60} />
                <div className="text-xs text-gray-400 text-center">Scan at party</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Sustainability Impact</h2>
        <div className="bg-green-50 rounded-lg p-4 flex items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-green-700">{user.plasticSaved}</span>
            <span className="text-sm text-green-900">bottles saved</span>
          </div>
          <div className="flex-1 ml-4">
            <div className="w-full bg-green-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: `${Math.min(user.plasticSaved * 2, 100)}%` }} />
            </div>
            <div className="text-xs mt-1 text-green-700">Keep going to unlock new rewards!</div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Your Tickets</h2>
        <div className="flex gap-4">
          {user.tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="font-semibold mb-1">{ticket.event}</div>
              <div className="text-sm text-gray-500 mb-2">{ticket.date}</div>
              <Image src={ticket.qrCodeUrl} alt="Ticket QR Code" width={60} height={60} />
              <div className="text-xs text-gray-400 mt-1">Show at event</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards Progress */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Rewards Progress</h2>
        <div className="bg-yellow-50 rounded-lg p-4 flex items-center gap-4">
          <div className="flex-1">
            <div className="w-full bg-yellow-200 rounded-full h-4">
              <div className="bg-yellow-500 h-4 rounded-full" style={{ width: `${user.rewardsProgress}%` }} />
            </div>
            <div className="text-xs mt-1 text-yellow-700">{user.rewardsProgress}% to Platinum!</div>
          </div>
        </div>
      </section>
    </div>
  );
}
