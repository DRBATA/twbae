export default function AccountPage() {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
      <div className="mb-2">Name: <span className="font-semibold">Jane Doe</span></div>
      <div className="mb-2">Email: <span className="font-semibold">jane@example.com</span></div>
      <div className="mb-2">Status: <span className="inline-block px-2 py-1 bg-yellow-400 text-yellow-900 rounded font-semibold text-sm">Gold</span></div>
      <div className="mb-6">Subscription: <span className="font-semibold">Active</span></div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold">Edit Profile</button>
    </div>
  );
}
