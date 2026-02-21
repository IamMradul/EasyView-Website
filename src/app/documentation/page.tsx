export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Documentation
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Welcome to EasyPage documentation. This guide explains how to use core features designed for better
          accessibility, focus, and reading comfort.
        </p>

        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Getting Started</h2>
            <p>
              Open EasyPage and choose your preferred readability settings. You can adjust layout style, visual
              emphasis, and content presentation to match your comfort.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Core Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Readable interface with clear visual hierarchy</li>
              <li>Support for focused and distraction-reduced interaction</li>
              <li>Accessibility-first design choices for inclusive usage</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Help and Support</h2>
            <p>
              For any issue or feedback, contact the support team at mradulg306@gmail.com.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
