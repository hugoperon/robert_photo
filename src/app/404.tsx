export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
        <p className="text-xl text-white mb-8">Page non trouvée</p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors rounded-md"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
} 