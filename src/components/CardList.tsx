import Card from "./Card"

function CardList() {
    const cards = [
        { title: "Card 1", description: "This is the first card" },
        { title: "Card 2", description: "This is the second card" },
        { title: "Card 3", description: "This is the third card" },
    ]

    return (
        <div className="grid gap-4">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}

export default CardList