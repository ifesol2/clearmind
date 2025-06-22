'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-gray-900 scroll-smooth">
  <header className="sticky top-0 z-30 bg-white bg-opacity-90 backdrop-blur-md shadow-sm border-b border-indigo-200">
    <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" className="text-2xl font-extrabold text-indigo-700 tracking-wide select-none hover:text-indigo-900 transition-colors">
        ClearMind
      </a>
      <div className="space-x-6 hidden md:flex">
        <a href="#how-it-works" className="text-indigo-600 hover:text-indigo-900 font-medium transition">How It Works</a>
        <a href="#who" className="text-indigo-600 hover:text-indigo-900 font-medium transition">Who It’s For</a>
        <a href="#why" className="text-indigo-600 hover:text-indigo-900 font-medium transition">Why It’s Different</a>
        <a href="#cta-final" className="text-indigo-600 hover:text-indigo-900 font-medium transition">Get Started</a>
      </div>
      <a href="#cta-final" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition shadow-indigo-300">
        Try Free Beta
      </a>
    </nav>
  </header>

  <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
    {/* Hero Section */}
    <section id="hero" className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <div className="flex-1 max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-indigo-900 drop-shadow-sm">
          Declutter Your Mind.<br />Focus on What Matters.
        </h1>
        <p className="text-lg sm:text-xl text-indigo-700/90 leading-relaxed">
          One place to dump your thoughts—AI turns them into clarity, calm, and control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="#cta-final"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition transform hover:-translate-y-0.5"
          >
            Try a Demo Brain Dump
          </a>
          <a
            href="#cta-final"
            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition transform hover:scale-105"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6 w-full max-w-3xl rounded-xl shadow-lg overflow-hidden ring-1 ring-indigo-200 bg-white">
        {/* Left side: Raw morning text dump */}
        <figure className="bg-indigo-50 p-6 flex flex-col justify-between relative">
          <figcaption className="text-indigo-800 font-semibold mb-2 select-none">Raw Morning Text Dump</figcaption>
          <pre className="whitespace-pre-wrap text-indigo-900 text-sm leading-relaxed font-mono overflow-y-auto max-h-72 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100 rounded-md p-3 bg-indigo-100 border border-indigo-200 shadow-inner">
{\`- Feeling overwhelmed with tasks
- Need to finish project proposal
- Remember to call mom
- Anxiety about deadlines
- Want to meditate today\`}
          </pre>
          <div className="absolute top-3 right-3 text-indigo-400 text-xs select-none">Morning Dump</div>
        </figure>

        {/* Right side: AI output */}
        <figure className="bg-gradient-to-tr from-indigo-600 to-indigo-500 p-6 flex flex-col justify-between text-white rounded-r-xl relative shadow-lg">
          <figcaption className="text-indigo-100 font-semibold mb-4 select-none">AI Output</figcaption>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Affirmations</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-100 text-sm">
                <li>I am capable of managing my tasks.</li>
                <li>Calmness grows within me each day.</li>
                <li>I embrace focus and clarity.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">To-Dos</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-100 text-sm">
                <li>Finish project proposal by noon.</li>
                <li>Call mom after lunch.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Insight</h3>
              <p className="italic text-indigo-200 text-sm">Prioritizing self-care will boost your productivity today.</p>
            </div>
          </div>
          <div className="absolute top-3 right-3 text-indigo-300 text-xs select-none">AI Summary</div>
        </figure>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="mt-32 max-w-4xl mx-auto text-center space-y-12">
      <h2 className="text-3xl font-extrabold text-indigo-900 tracking-tight">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <article className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default">
          <div className="mb-4 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=64&q=80"
              alt="Typing freely illustration"
              className="w-16 h-16 rounded-full shadow-md"
              loading="lazy"
            />
          </div>
          <h3 className="text-indigo-700 font-semibold text-xl mb-2">You Type Freely</h3>
          <p className="text-indigo-600 leading-relaxed">Whatever’s on your mind, jot it down without judgment or filters.</p>
        </article>
        <article className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default">
          <div className="mb-4 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=64&q=80"
              alt="AI organizes illustration"
              className="w-16 h-16 rounded-full shadow-md"
              loading="lazy"
            />
          </div>
          <h3 className="text-indigo-700 font-semibold text-xl mb-2">AI Organizes It</h3>
          <p className="text-indigo-600 leading-relaxed">Automatically sorts your input into thoughts, to-dos, emotions, and priorities.</p>
        </article>
        <article className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default">
          <div className="mb-4 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=64&q=80"
              alt="Focus illustration"
              className="w-16 h-16 rounded-full shadow-md"
              loading="lazy"
            />
          </div>
          <h3 className="text-indigo-700 font-semibold text-xl mb-2">You Focus</h3>
          <p className="text-indigo-600 leading-relaxed">Start your day with a clear plan and calm headspace to be productive and present.</p>
        </article>
      </div>
    </section>

    {/* Who It's For */}
    <section id="who" className="mt-32 max-w-5xl mx-auto px-6 text-indigo-900">
      <h2 className="text-3xl font-extrabold text-center mb-12">Who It’s For</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <li className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default flex flex-col items-center space-y-3">
          <span className="text-4xl" aria-hidden="true">🎓</span>
          <h3 className="font-semibold text-lg">Students</h3>
          <p className="text-indigo-700 text-sm">Managing overwhelm and study stress</p>
        </li>
        <li className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default flex flex-col items-center space-y-3">
          <span className="text-4xl" aria-hidden="true">🧑‍💼</span>
          <h3 className="font-semibold text-lg">Busy Professionals</h3>
          <p className="text-indigo-700 text-sm">Juggling priorities and deadlines</p>
        </li>
        <li className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default flex flex-col items-center space-y-3">
          <span className="text-4xl" aria-hidden="true">🧘‍♂️</span>
          <h3 className="font-semibold text-lg">Wellness Seekers</h3>
          <p className="text-indigo-700 text-sm">Journaling fans focused on mental health</p>
        </li>
        <li className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-indigo-300 transition-shadow cursor-default flex flex-col items-center space-y-3">
          <span className="text-4xl" aria-hidden="true">🧑‍💻</span>
          <h3 className="font-semibold text-lg">Creators & Founders</h3>
          <p className="text-indigo-700 text-sm">Managing racing minds and big ideas</p>
        </li>
      </ul>
    </section>

    {/* Why It’s Different */}
    <section id="why" className="mt-32 max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-extrabold text-indigo-900 mb-10">Why It’s Different</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-2xl p-6 shadow-md border border-indigo-300 hover:shadow-indigo-400 transition-shadow cursor-default">
          <h3 className="text-indigo-700 font-semibold mb-2">✨ Personalized Daily Summaries</h3>
          <p className="text-indigo-700 text-sm leading-relaxed">Tailored insights and plans that adapt to your unique brain patterns.</p>
        </div>
        <div className="bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-2xl p-6 shadow-md border border-indigo-300 hover:shadow-indigo-400 transition-shadow cursor-default">
          <h3 className="text-indigo-700 font-semibold mb-2">🧘 Mental Health-Friendly Affirmations</h3>
          <p className="text-indigo-700 text-sm leading-relaxed">Positive, supportive messages to start your day with calm confidence.</p>
        </div>
        <div className="bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-2xl p-6 shadow-md border border-indigo-300 hover:shadow-indigo-400 transition-shadow cursor-default">
          <h3 className="text-indigo-700 font-semibold mb-2">🧑‍🎓 Journaling Meets Planning</h3>
          <p className="text-indigo-700 text-sm leading-relaxed">Combine self-reflection with actionable task management seamlessly.</p>
        </div>
        <div className="bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-2xl p-6 shadow-md border border-indigo-300 hover:shadow-indigo-400 transition-shadow cursor-default">
          <h3 className="text-indigo-700 font-semibold mb-2">🧠 AI Learns Your Patterns Over Time</h3>
          <p className="text-indigo-700 text-sm leading-relaxed">The more you use ClearMind, the smarter and more helpful it becomes.</p>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="mt-32 max-w-3xl mx-auto px-6 bg-indigo-600 rounded-3xl shadow-lg text-white py-14 text-center relative">
      <blockquote className="text-xl italic leading-relaxed max-w-xl mx-auto mb-6 drop-shadow-md">
        “It’s like a therapist and a productivity coach had a baby.”
      </blockquote>
      <cite className="block text-indigo-200 font-semibold tracking-wide">— Beta User</cite>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-400 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
    </section>

    {/* Final CTA Section */}
    <section id="cta-final" className="mt-32 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 rounded-3xl py-20 px-8 text-center text-white shadow-xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-6 drop-shadow-md">Start your day with a ClearMind.</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
        <a
          href="#"
          className="flex-1 bg-white text-indigo-700 font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-indigo-900 transition transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Try Free Beta
        </a>
        <a
          href="#"
          className="flex-1 border-2 border-white text-white font-semibold px-6 py-4 rounded-xl hover:bg-white hover:text-indigo-700 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
        >
          Sign Up
        </a>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="mt-32 bg-indigo-900 text-indigo-300 py-10 border-t border-indigo-700">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm select-none">Built for brains that never stop.</p>
      <nav className="flex space-x-8 text-sm">
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Privacy</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>
      <div className="flex space-x-6 text-indigo-300 text-xl">
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" tabIndex={0}>
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
          </svg>
        </a>
        <a href="https://www.notion.so/blog" aria-label="Notion Blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" tabIndex={0}>
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
            <path d="M4.5 3
  )
}