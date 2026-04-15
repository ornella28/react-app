import Card from "./Card"

function CardList() {
    const cards = [
        {
            title: "Mountain Adventure",
            description: "Explore the beauty of nature in the mountains.",
            image: "https://picsum.photos/400/200?1",
            category: "Travel",
        },
        {
            title: "Healthy Food",
            description: "Discover delicious and healthy recipes.",
            image: "https://picsum.photos/400/200?2",
            category: "Food",
        },
        {
            title: "Tech Trends",
            description: "Stay updated with the latest in technology.",
            image: "https://picsum.photos/400/200?3",
            category: "Technology",
        },
    ]

    return (
        <div className="grid gap-6">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    category={card.category}
                />
            ))}
        </div>
    )
}

export default CardList