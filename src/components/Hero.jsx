import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">AI-powered sustainability</span>
          </div>
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            EcoMind: Detect, learn, and reduce waste in real time
          </h1>
          <p className="text-slate-200/90 max-w-xl">
            Bridge technology and sustainability. Scan objects with your camera to instantly identify waste type and discover its environmental impact.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#scanner" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition">
              Start Scanning
            </a>
            <a href="#learn" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/15 transition">
              Learn More
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-300/90">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-emerald-400" />
              <span>Futuristic learning meets real impact</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
