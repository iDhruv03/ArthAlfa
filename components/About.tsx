export default function About() {
  const values = [
    {
      title: "SEBI Compliance",
      description: "Built specifically for the Indian financial services industry with automated compliance management."
    },
    {
      title: "Revenue Automation",
      description: "Automated subscription management and revenue optimization for sustainable growth."
    },
    {
      title: "Community Building",
      description: "Engage your subscribers with interactive community features and real-time communication tools."
    },
    {
      title: "Signal Management",
      description: "Complete signal lifecycle management from creation to closing with dynamic updates."
    }
  ]

  const stats = [
    { number: "10+", label: "Financial Professionals" },
    { number: "42%", label: "Growth in Subscribers" },
    { number: "30min", label: "Compliance Prep Time" },
    { number: "100%", label: "SEBI Compliant" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why ArthAlfa?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ArthaAlfa is an operating system for financial influencers, empowering their teams to manage 
              asset classes, subscriptions, trading signals, and community interactions. Built specifically 
              for the Indian financial services industry.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "Switching from WhatsApp to ArthaAlfa cut compliance prep from 3 days to 30 minutes and 
              grew paid subscribers 42% in one quarter." — SEBI RA, Mumbai
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              Start Free Trial
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform?</h3>
                <p className="text-gray-600">
                  Join thousands of financial professionals who've already made the switch to Arthalfa
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
