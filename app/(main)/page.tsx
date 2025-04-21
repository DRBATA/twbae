import Carousel from "../Carousel";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Water Subscription App!</h1>
      <p className="mb-6">
        You are now logged in. Explore the features below, or use the navigation above.
      </p>
      <Carousel />
      {/* Add more sections or dashboard widgets here as you build */}
    </main>
  );
}
