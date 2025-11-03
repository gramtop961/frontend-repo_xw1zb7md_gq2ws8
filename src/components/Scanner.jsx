import React, { useEffect, useRef, useState } from 'react';
import { Camera, ScanLine, RefreshCw, Info } from 'lucide-react';

export default function Scanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreaming(true);
      }
    } catch (e) {
      setError('Camera access was blocked. Please allow camera permissions.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }
    setStreaming(false);
  };

  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Simulated inference result for demo purposes
    const mockClasses = [
      { label: 'Recyclable', color: 'text-emerald-400', tip: 'Rinse and place it in the recycling bin.' },
      { label: 'Organic', color: 'text-lime-400', tip: 'Compost when possible to reduce landfill waste.' },
      { label: 'Inorganic', color: 'text-amber-400', tip: 'Dispose responsibly; check local guidelines.' },
    ];
    const pick = mockClasses[Math.floor(Math.random() * mockClasses.length)];
    setResult({
      label: pick.label,
      tip: pick.tip,
      color: pick.color,
      time: new Date().toLocaleTimeString(),
    });
  };

  return (
    <section id="scanner" className="relative bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Scan waste in real time</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">
              Use your device camera to classify objects. This prototype simulates AI results and educates best practices.
            </p>
          </div>
          <button
            onClick={streaming ? stopCamera : startCamera}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition shadow ${
              streaming ? 'bg-rose-500 hover:bg-rose-600' : 'bg-emerald-500 hover:bg-emerald-600'
            }`}
          >
            {streaming ? <RefreshCw className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
            {streaming ? 'Stop camera' : 'Open camera'}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="aspect-video bg-black/60 flex items-center justify-center">
              <video ref={videoRef} playsInline muted className="h-full w-full object-contain" />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ScanLine className="h-16 w-16 text-white/10" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="text-sm text-slate-300 flex items-center gap-2">
                <Info className="h-4 w-4 text-slate-400" />
                {streaming ? 'Camera is active' : 'Camera is off'}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={captureFrame} disabled={!streaming} className="rounded-lg bg-white/10 hover:bg-white/15 px-3 py-2 text-sm font-medium disabled:opacity-50">
                  Capture
                </button>
              </div>
            </div>
            <canvas ref={canvasRef} className="hidden" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Result</h3>
            {error && (
              <div className="rounded-lg bg-rose-500/15 text-rose-200 px-4 py-3 text-sm">
                {error}
              </div>
            )}
            {result ? (
              <div className="space-y-4">
                <div className="text-6xl font-extrabold">
                  <span className={result.color}>{result.label}</span>
                </div>
                <p className="text-slate-200/90">{result.tip}</p>
                <div className="text-xs text-slate-400">Analyzed at {result.time}</div>
                <div className="rounded-lg bg-emerald-500/10 text-emerald-200 px-4 py-3 text-sm">
                  Tip: Reduce contamination by keeping recyclables dry and clean.
                </div>
              </div>
            ) : (
              <div className="text-slate-300/90">No capture yet. Open the camera and press Capture to analyze.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
