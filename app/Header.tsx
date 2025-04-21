"use client";
import { useState, useEffect } from "react";
import MagicLinkLogin from "../components/MagicLinkLogin";
import Image from "next/image";
import { Droplet, Leaf, X } from "lucide-react";

import { waterRefillStations } from "../lib/waterRefillStations";
import { refillFacts } from "../lib/refillFacts";
import RefillFactToast from "../components/RefillFactToast";



export default function PremiumHeader() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const supabase = require("../utils/supabase/client").createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data?.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);
  // const user = null; // REMOVED: user is now managed by useState above
  const app = null;
  const [profile, setProfile] = useState<{ water_subscription_active: boolean } | null>(null);
  const [showFact, setShowFact] = useState(false);
  const [factIdx, setFactIdx] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  // No user: skip fetching profile
  useEffect(() => {
    setProfile(null);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center p-4">
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-medium">Logged in as {user.email}</span>
                <button
                  className="ml-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => {
                    const supabase = require("../utils/supabase/client").createClient();
                    supabase.auth.signOut();
                    setUser(null);
                  }}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="w-full max-w-xs"><MagicLinkLogin /></div>
            )}
          </div>
          {/* Top right: Ticket placeholder */}
          <div>
            <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Buy Ticket</button>
          </div>
        </div>
      </header>

      {/* Account Modal/Section */}
      {user && profile && (
        <div className="max-w-md mx-auto my-4 p-4 border rounded shadow bg-white relative">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">My Account</div>
            <button onClick={() => setShowInfo(true)} className="ml-2 text-blue-600" title="Learn about your environmental impact">
              <span role="img" aria-label="info">ℹ️</span>
            </button>
          </div>
          <div className="mt-2">
            Water Bar Subscription: {profile?.water_subscription_active ? (
              <span className="text-green-600 font-semibold">Active</span>
            ) : (
              <>
                <span className="text-red-500 font-semibold">Not Active</span>
                {/* TODO: Wire up subscribe action to real API */}
                <button disabled className="ml-4 px-3 py-1 bg-blue-300 text-white rounded cursor-not-allowed">Subscribe here</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-black" onClick={() => setShowInfo(false)}>&times;</button>
            <div className="text-lg font-bold mb-2">How Your Refills Help</div>
            <ul className="list-disc pl-4 text-sm space-y-2">
              {refillFacts.slice(0, 5).map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-gray-500">You'll unlock more facts as you keep refilling!</div>
          </div>
        </div>
      )}

      {/* Toast Notification for Subscription Activation */}
      <RefillFactToast
        fact={refillFacts[factIdx]}
        show={showFact}
        onClose={() => setShowFact(false)}
      />

      {/* Modal (now outside header) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg min-w-[340px] relative flex flex-col items-center justify-center">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <h2 className="text-xl font-bold mb-2 text-black text-center">Find Water Near You</h2>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Explore our network of unique refill partners across Dubai. Each spot is chosen for quality, sustainability, and a welcoming vibe.
            </p>
            <div className="flex items-center w-full justify-center">
              {/* Left arrow */}
              <button
                className="p-2 text-gray-400 hover:text-logo-cyan disabled:opacity-30"
                onClick={() => setCurrentIdx((i) => Math.max(i - 1, 0))}
                disabled={currentIdx === 0}
                aria-label="Previous location"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              {/* Horizontal scrollable card */}
              <div className="overflow-hidden w-72 mx-2">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                  {waterRefillStations.map((loc, idx) => (
                    <div key={idx} className="min-w-72 max-w-72 px-2 flex-shrink-0 flex flex-col items-center">
                      {loc.image && (
                        <div className="mb-2 flex justify-center">
                          <Image
                            src={loc.image}
                            alt={loc.name + ' logo'}
                            width={120}
                            height={120}
                            className="rounded-full object-contain"
                          />
                        </div>
                      )}
                      <div className="font-semibold text-black text-center text-lg">{loc.name}</div>
                      {loc.description && (
                        <div className="text-gray-700 text-xs mt-2 whitespace-pre-line text-center">
                          {loc.description.replace(/^Soulgreen:\s*/, "")}
                        </div>
                      )}
                      <div className="flex gap-2 mt-4 justify-center">
                        <a
                          href={loc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-700 transition-colors text-sm"
                        >
                          See Location
                        </a>
                        {loc.menuUrl && (
                          <a
                            href={loc.menuUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-700 transition-colors text-sm"
                          >
                            See Menu
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right arrow */}
              <button
                className="p-2 text-gray-400 hover:text-logo-cyan disabled:opacity-30"
                onClick={() => setCurrentIdx((i) => Math.min(i + 1, waterRefillStations.length - 1))}
                disabled={currentIdx === waterRefillStations.length - 1}
                aria-label="Next location"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
