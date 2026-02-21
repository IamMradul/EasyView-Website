export default function AccessibilityGuidePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Accessibility Guide
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          EasyPage is designed for neurodivergent accessibility with a focus on readability, reduced distraction,
          and inclusive interaction.
        </p>

        <section className="space-y-4 text-gray-300">
          <p>
            <span className="font-semibold text-white">Readable Layouts:</span> Clear typography, balanced spacing,
            and focused sections to reduce cognitive load.
          </p>
          <p>
            <span className="font-semibold text-white">Accessible Colors:</span> High-contrast combinations improve
            visibility and text clarity.
          </p>
          <p>
            <span className="font-semibold text-white">Keyboard Friendly:</span> Interactive controls are reachable
            and usable through keyboard navigation.
          </p>
          <p>
            <span className="font-semibold text-white">Assistive Technology Support:</span> Semantic structure and
            descriptive labels help screen readers interpret content.
          </p>
        </section>
      </div>
    </main>
  );
}
