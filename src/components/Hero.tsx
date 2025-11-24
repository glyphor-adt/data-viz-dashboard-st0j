import React from 'react'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">Visualize Your Data, Unlock Insights</h1>
        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
          Transform raw data into interactive dashboards. Make data-driven decisions with ease and clarity.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl">Start Visualizing Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
