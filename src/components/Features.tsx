import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Real-Time Data Insights',
    description: 'Get up-to-the-minute data visualizations that empower you to react instantly to changing trends.'
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'Your data is protected with enterprise-grade security, ensuring confidentiality and compliance.'
  },
  {
    icon: TrendingUp,
    title: 'Actionable Business Intelligence',
    description: 'Transform complex data sets into clear, actionable insights that drive growth and improve decision-making.'
  }
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6">
              <feature.icon className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
