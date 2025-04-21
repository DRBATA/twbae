export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Welcome, Jane!</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Upcoming Bookings</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-green-50 p-3 rounded">
            <span>Signature Event: Ice Bath</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">QR</span>
          </li>
          <li className="flex justify-between items-center bg-green-50 p-3 rounded">
            <span>Home Party Host</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">QR</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Rewards Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div className="text-sm text-gray-500">70% to Platinum</div>
      </div>
    </div>
  );
}
