import React from 'react';
import { Brain, Recycle, ShieldCheck, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-driven insights',
    desc: 'Real-time detection helps you recognize waste types and learn what to do next.'
  },
  {
    icon: Recycle,
    title: 'Waste-wise actions',
    desc: 'Clear guidance to recycle, compost, or dispose based on local-friendly practices.'
  },
  {
    icon: BookOpen,
    title: 'Interactive learning',
    desc: 'Every scan becomes a mini-lesson to build sustainable habits over time.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy first',
    desc: 'Camera access happens on-device. You control when it starts and stops.'
  }
];

export default function Features() {
  return (
    <section id="learn" className="bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">Technology with a purpose</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
