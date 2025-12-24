import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Future Tech Journal</h1>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Articles</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Welcome to Future Tech Journal</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your daily source for technology news, AI, programming, and tech communities.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Articles
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Article Title {i}</h3>
              <p className="text-gray-600 mb-4">
                This is a sample article preview. Click to read the full story.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Read more →
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
