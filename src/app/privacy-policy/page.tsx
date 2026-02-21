export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          This Privacy Policy explains how EasyPage handles user information with transparency and care.
        </p>

        <section className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Information We Use</h2>
            <p>
              EasyPage may process user-provided inputs only to deliver app functionality and improve user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">How Information Is Used</h2>
            <p>
              Information is used for feature operation, quality improvements, and support response. We do not sell
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              If you have privacy-related questions, please email mradulg306@gmail.com.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
