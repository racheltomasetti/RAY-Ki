"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Main Content Area - This will be built out as you add content */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            <div className="p-2">
              <h2 className="text-4xl md:text-3xl font-bold text-center italic">
                welcome to K·I
              </h2>
            </div>

            {/* Icon at top center */}
            <div className="flex justify-center mb-8">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={120}
                height={120}
                className="rounded-full animate-bob"
                priority
              />
            </div>

            {/* Horizontal divider */}
            <hr className="border-t border-[var(--ui-2)] w-full" />

            <div className="p-2">
              <h2 className="text-4xl md:text-3xl font-bold mb-4 text-center">
                [the story of K·I]
              </h2>
            </div>

            {/* Demo Section */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-2xl font-bold text-center">
                demo
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {/* Mobile Demo */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">mobile</h3>
                  <video
                    className="w-full max-w-xs rounded-lg shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/demos/ki-mobile-demo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Web Demo - Placeholder for now */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">web</h3>
                  <div className="w-full max-w-xs h-64 rounded-lg shadow-lg bg-[var(--ui)] flex items-center justify-center">
                    <p className="text-[var(--tx-3)]">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more content sections here */}
          </section>
        </div>
      </main>
    </div>
  );
}
