import React from 'react';
import { Leaf, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-300">
          <Leaf className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold">EcoMind</span>
          <span className="text-slate-500">•</span>
          <span className="text-sm">Learn, reflect, and take action</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a className="hover:text-white transition" href="#learn">About</a>
          <a className="hover:text-white transition" href="#scanner">Scan</a>
          <a className="inline-flex items-center gap-2 hover:text-white transition" href="#">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
