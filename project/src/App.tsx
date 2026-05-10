import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Home, Building2, ChevronRight, Zap } from 'lucide-react';

export default function VidcreteLandingPage() {
  const [activeService, setActiveService] = useState(0);

  const photos = [
    { src: '/37973448_2207980289215635_6272608206036402176_n.jpg', alt: 'Professional concrete driveway', title: 'Quality Finish' },
    { src: '/36792781_2168256006521397_3714309213892116480_n.jpg', alt: 'Completed concrete project', title: 'Polished Look' },
    { src: '/38046188_2207980175882313_2104715244134727680_n.jpg', alt: 'Concrete patio installation', title: 'Clean Work' },
    { src: '/29872218_2059943404019325_8933357410195739577_o.jpg', alt: 'Professional concrete slab', title: 'Expert Craftsmanship' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/B83772D3-8FE7-4DF3-AFFF-1F17F08B2F9B.png" alt="Vidcrete Logo" className="h-20 object-contain" />
          </div>
          <a href="tel:0400087412" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition shadow-md hover:shadow-lg">
            <Phone className="w-4 h-4" /> 0400 087 412
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/40 px-4 py-2 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2 text-blue-300" />
              Nar Nar Goon | Pakenham | South East Gippsland
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Professional Concrete Driveways & Slabs
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              20+ years delivering clean, reliable concrete work across South East Gippsland. From residential driveways to commercial slabs, Vidcrete builds it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0400087412" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" /> Get a Free Quote
              </a>
              <a href="mailto:dennis@vidcrete.com" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg transition">
                <Mail className="w-5 h-5 mr-2" /> Email Dennis
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96 bg-slate-800">
              <img
                src="/37973448_2207980289215635_6272608206036402176_n.jpg"
                alt="Professional concrete work"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">20+</div>
            <div className="text-sm font-semibold text-slate-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">Local</div>
            <div className="text-sm font-semibold text-slate-600">Family Business</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">Clean</div>
            <div className="text-sm font-semibold text-slate-600">Professional Finish</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">Free</div>
            <div className="text-sm font-semibold text-slate-600">Local Quotes</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Concreting Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete concrete solutions with proper preparation and professional finish. Quality work that lasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Home,
              title: "Concrete Driveways",
              desc: "New driveways, extensions, and replacements for residential properties. Properly prepared for durability.",
              color: "from-blue-50 to-blue-100"
            },
            {
              icon: Building2,
              title: "Shed & Garage Slabs",
              desc: "Strong, level slabs for sheds, garages, workshops. Built to handle load and last the distance.",
              color: "from-slate-50 to-slate-100"
            },
            {
              icon: Zap,
              title: "Paths, Steps & More",
              desc: "Footpaths, side access, steps, infills, and smaller residential or commercial works.",
              color: "from-blue-50 to-slate-100"
            },
          ].map((service, idx) => (
            <div
              key={idx}
              onClick={() => setActiveService(idx)}
              className={`rounded-2xl p-8 border-2 transition cursor-pointer transform hover:scale-105 ${
                activeService === idx
                  ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg'
                  : `border-slate-200 bg-gradient-to-br ${service.color} hover:border-blue-300`
              }`}
            >
              <service.icon className={`w-12 h-12 mb-4 ${activeService === idx ? 'text-blue-600' : 'text-slate-700'}`} />
              <h3 className="text-2xl font-black mb-3">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose Vidcrete?</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Simple approach: turn up on time, communicate clearly, prepare the job properly, and deliver a clean professional finish. That's the Vidcrete way.
            </p>
            <div className="space-y-4">
              {[
                "20+ years hands-on concreting experience",
                "Local operator based in Pakenham / Nar Nar Goon",
                "Residential, commercial and industrial works",
                "Clear quoting with honest professional advice",
                "Meticulous preparation and quality finishing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-8 shadow-xl">
            <div className="space-y-4 mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg leading-relaxed">
                "Professional, reliable and takes pride in his work. Dennis communicated clearly throughout, finished on time and left the site clean. Highly recommend."
              </p>
              <p className="text-blue-200 font-semibold">Local customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Recent Projects</h2>
          <p className="text-lg text-slate-600">Quality concrete work delivered across South East Gippsland</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition h-64 md:h-80"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <span className="text-white font-bold text-lg">{photo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Servicing South East Gippsland</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
            Based around Pakenham and Nar Nar Goon, serving nearby suburbs and surrounding areas. Call for availability.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Nar Nar Goon", "Pakenham", "Officer", "Bunyip", "Longwarry", "Warragul", "Drouin", "Traralgon", "Trafalgar", "Neerim South"].map((area) => (
              <span key={area} className="rounded-full bg-white border-2 border-blue-200 px-5 py-2 font-semibold text-slate-700 hover:border-blue-400 transition">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Ready for Your Concrete Work?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Call Dennis for a free local quote. Have your address and photos ready if you can.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0400087412"
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6 mr-3" /> 0400 087 412
          </a>
          <a
            href="mailto:dennis@vidcrete.com"
            className="inline-flex items-center justify-center px-10 py-5 bg-slate-800 hover:bg-slate-900 text-white rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6 mr-3" /> dennis@vidcrete.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/B83772D3-8FE7-4DF3-AFFF-1F17F08B2F9B.png" alt="Vidcrete Logo" className="h-16 object-contain mb-3" />
              <p className="text-slate-400">Professional Concreting</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <p className="text-slate-300">0400 087 412</p>
              <p className="text-slate-300">dennis@vidcrete.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Service Area</h3>
              <p className="text-slate-400">Nar Nar Goon, Pakenham</p>
              <p className="text-slate-400">& South East Gippsland</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Vidcrete. Professional Concreting Services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
