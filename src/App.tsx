import Header from "./components/Header"
import CardList from "./components/CardList"
import Footer from "./components/Footer"

function App() {
    return (
        <main className="p-6 max-w-xl mx-auto">
            <Header />
            <CardList />
            <Footer />
        </main>
    )
}

export default App