// ARCHIVED VERSION OF HEADER FOR REFERENCE
// This is a snapshot of the previous PremiumHeader implementation before simplification.

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ticket,
  Calendar,
  Home,
  User,
  Clock,
  Droplet,
  Leaf,
  QrCode,
  X,
  ChevronDown,
  Plus,
  Settings,
} from "lucide-react";
import Image from "next/image";

// The original PremiumHeader code is below (may contain errors from previous edits):
// ---
// (Paste the current contents of Header.tsx here for archival)
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ticket,
  Calendar,
  Home,
  User,
  Clock,
  Droplet,
  Leaf,
  QrCode,
  X,
  ChevronDown,
  Plus,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function PremiumHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <button className="flex items-center gap-2 px-3 py-2 rounded-md text-white bg-logo-cyan hover:bg-logo-orange transition-colors mr-2">
          <Droplet className="h-5 w-5" aria-hidden="true" />
          <span className="hidden md:inline">Find Water</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md text-white bg-emerald hover:bg-logo-orange transition-colors">
          <Leaf className="h-5 w-5" aria-hidden="true" />
          <span className="hidden md:inline">Tap to Refill</span>
        </button>
      </div>
    </header>
  );
}
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setShowAccountModal(false);
      }
      if (bookingsRef.current && !bookingsRef.current.contains(event.target as Node)) {
        setShowBookingsModal(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample upcoming bookings data
  const upcomingBookings = [
    {
      id: 1,
      title: "Ice Bath Experience",
      date: "May 15, 2023",
      time: "10:00 AM",
      location: "Dubai Marina",
    },
    {
      id: 2,
      title: "Wellness Retreat",
      date: "May 22, 2023",
      time: "9:30 AM",
      location: "Palm Jumeirah",
    },
  ];

  // Sample user data
  const userData = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    memberSince: "January 2023",
    membershipLevel: "Gold",
    profileImage: "/images/guest-portrait.png",
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo area - left side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-playfair text-xl text-white">THE WATER BAR</span>
            </Link>
          </div>

          {/* Navigation - right side */}
          <div className="flex items-center space-x-3">
            {/* Gold Member Badge */}
            <motion.div
              className="bg-gradient-to-r from-gold-dark to-gold px-4 py-1.5 rounded-full text-black text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center">
                <span className="mr-1 font-playfair">✦</span> Gold Member
              </span>
            </motion.div>

            {/* Water & Plastic Saved */}
            <motion.div
              className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-white text-sm flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div className="flex items-center">
                <Droplet className="h-4 w-4 text-logo-cyan mr-1" aria-hidden="true" />
                <span className="mr-2">37</span>
                <Leaf className="h-4 w-4 text-emerald mr-1" aria-hidden="true" />
                <span>12kg</span>
              </div>
              <div className="ml-2 text-xs text-white/70 hidden md:block">water & plastic saved</div>
            </motion.div>

            {/* QR Code Dropdown */}
            <div className="relative" ref={qrRef}>
              <motion.div
                className="bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-white text-sm flex items-center cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                onClick={() => setShowQrOptions(!showQrOptions)}
              >
                <QrCode className="h-4 w-4 text-gold mr-1.5" aria-hidden="true" />
                <span className="mr-1">QR</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${showQrOptions ? "rotate-180" : ""}`} aria-hidden="true" />
              </motion.div>

              <AnimatePresence>
                {showQrOptions && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2">
                      <motion.div
                        className="flex items-center px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Ticket className="h-4 w-4 text-logo-cyan mr-2" aria-hidden="true" />
                        <span>Ticket</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Calendar className="h-4 w-4 text-logo-orange mr-2" aria-hidden="true" />
                        <span>Booking</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Home className="h-4 w-4 text-emerald mr-2" aria-hidden="true" />
                        <span>Host</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Account Links */}
            <div className="hidden md:flex items-center space-x-4 ml-2">
              {/* My Account */}
              <div className="relative" ref={accountRef}>
                <motion.div
                  onClick={() => setShowAccountModal(true)}
                  className="text-white/80 hover:text-white text-sm transition-colors flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <User className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  My Account
                </motion.div>

                <AnimatePresence>
                  {showAccountModal && (
                    <motion.div
                      className="absolute right-0 mt-2 w-80 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden z-50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative p-4">
                        <button
                          onClick={() => setShowAccountModal(false)}
                          className="absolute top-2 right-2 text-white/70 hover:text-white"
                        >
                          <X className="h-4 w-4" aria-hidden="true" />
                        </button>

                        <div className="flex items-center mb-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                            <Image
                              src={userData.profileImage || "/placeholder.svg"}
                              alt={userData.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-white font-medium">{userData.name}</h3>
                            <p className="text-white/70 text-xs">{userData.email}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-gold text-xs font-playfair mr-1">✦</span>
                              <span className="text-gold text-xs">{userData.membershipLevel} Member</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
  {/* Water Subscription Section */}
  <div className="rounded-lg bg-black/20 px-3 py-2 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Droplet className="h-5 w-5 text-logo-cyan" aria-hidden="true" />
        <span className="text-white font-medium">Water Subscription:</span>
        <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: '#0ec2e9', color: '#fff' }}>Active</span>
        <button title="About Water Subscription" className="ml-1 text-logo-cyan hover:text-logo-orange" onClick={() => setShowWaterInfo(true)}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><text x="8" y="12" textAnchor="middle" fontSize="10" fill="currentColor">i</text></svg>
        </button>
      </div>
      <button
        className="ml-4 bg-logo-cyan hover:bg-logo-orange text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors"
        onClick={() => { setShowToast(true); setWaterClaims(waterClaims + 1); setLeafStat(leafStat + 1); }}
      >
        Claim Free Drink
      </button>
    </div>
    <div className="flex items-center gap-3 mt-2">
  <Droplet className="h-4 w-4 text-logo-cyan" aria-hidden="true" />
  <span className="text-logo-cyan font-medium">{waterClaims} bottles</span>
  {/* Plastic Saved: tapable only if active subscription */}
  <button
    className={`flex items-center ml-4 transition-opacity ${true /* replace with subscription active check if needed */ ? 'hover:bg-emerald/20 cursor-pointer' : 'opacity-50 cursor-not-allowed pointer-events-none'}`}
    style={{ border: 0, background: 'none', padding: 0 }}
    disabled={!true /* replace with subscription active check if needed */}
    onClick={() => {
      if (true /* replace with subscription active check if needed */) {
        setLeafStat(leafStat + 1);
        setShowToast(true);
      }
    }}
    title={true /* replace with subscription active check if needed */ ? 'Tap to celebrate another bottle saved!' : 'Active subscription required'}
  >
    <Leaf className="h-4 w-4 text-emerald" aria-hidden="true" />
    <span className="text-emerald font-medium ml-1">{leafStat}kg plastic saved</span>
  </button>
</div>
  </div>

  {/* Party Membership Section */}
  <div className="rounded-lg bg-black/20 px-3 py-2 flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black text-xs font-semibold">{userData.membershipLevel} Member</span>
      <button title="Membership Info" className="ml-1 text-gold hover:text-logo-orange" onClick={() => setShowMembershipInfo(true)}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><text x="8" y="12" textAnchor="middle" fontSize="10" fill="currentColor">i</text></svg>
      </button>
    </div>

                        <></>
                        <AnimatePresence>
                          {showWaterInfo && (
                            <motion.div
                              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setShowWaterInfo(false)}
                            >
                              <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-[90vw] flex flex-col gap-2 relative" onClick={e => e.stopPropagation()}>
                                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowWaterInfo(false)}>
                                  <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <div className="flex items-center gap-2 mb-2">
                                  <Droplet className="h-5 w-5 text-logo-cyan" aria-hidden="true" />
                                  <span className="font-semibold text-lg">Water Subscription</span>
                                </div>
                                <p className="text-gray-700 text-sm">Your subscription gives you access to a network of filtered water points across Dubai. Save plastic and stay hydrated as you go about the city. Just show your active status to claim free drinks at partner locations.</p>
                                <p className="text-xs text-logo-cyan mt-2">Status: <span className="font-bold">Active</span></p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <AnimatePresence>
                          {showMembershipInfo && (
                            <motion.div
                              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setShowMembershipInfo(false)}
                            >
                              <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-[90vw] flex flex-col gap-2 relative" onClick={e => e.stopPropagation()}>
                                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowMembershipInfo(false)}>
                                  <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-gold-dark to-gold text-black text-xs font-semibold">{userData.membershipLevel} Member</span>
                                  <span className="font-semibold text-lg">Membership Info</span>
                                </div>
                                <p className="text-gray-700 text-sm">Host more parties to unlock higher membership levels and enjoy exclusive perks. Each level brings new rewards and recognition within our community. No pressure—just level up as you participate!</p>
                                <ul className="text-xs mt-2 list-disc list-inside">
                                  <li><span className="font-bold">Gold:</span> Priority booking, exclusive events, special gifts</li>
                                  <li><span className="font-bold">Platinum:</span> All Gold perks + VIP access, premium swag, and more</li>
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <AnimatePresence>
                          {showToast && (
                            <motion.div
                              className="fixed bottom-8 right-8 bg-logo-cyan text-white px-6 py-3 rounded-lg shadow-lg z-50"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 30 }}
                              transition={{ duration: 0.3 }}
                              onAnimationComplete={() => setTimeout(() => setShowToast(false), 2000)}
                            >
                              🎉 Free drink claimed! Plastic saved increased.
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-white/50 text-xs">Member since {userData.memberSince}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* My Bookings */}
              <div className="relative" ref={bookingsRef}>
                <motion.div
                  onClick={() => setShowBookingsModal(true)}
                  className="text-white/80 hover:text-white text-sm transition-colors flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
                  My Bookings
                </motion.div>

                <AnimatePresence>
                  {showBookingsModal && (
                    <motion.div
                            <Plus className="h-3 w-3 mr-1" aria-hidden="true" />
                            New Booking
                          </motion.button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: 7 }, (_, i) => (
                              <div key={i} className="text-center text-xs text-white/50">
                                {"SMTWTFS"[i]}
                              </div>
                            ))}

                            {Array.from({ length: 31 }, (_, i) => (
                              <div
                                key={i}
                                className={`
                                  text-center text-xs p-1 rounded-full cursor-pointer
                                  ${i === 14 || i === 21 ? "bg-logo-cyan text-white" : "text-white/70 hover:bg-white/10"}
                                `}
                              >
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
