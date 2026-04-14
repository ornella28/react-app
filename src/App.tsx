
function App() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-xl w-full">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to My Tailwind Page
                </h1>

                <p className="text-gray-700 mb-6">
                    I am learning how to use Tailwind CSS in a React project with Vite.
                </p>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 mb-6">
                    Click Me
                </button>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        My First Card
                    </h2>
                    <p className="text-gray-600">
                        This card is styled using Tailwind utility classes for spacing,
                        colors, and typography.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default App