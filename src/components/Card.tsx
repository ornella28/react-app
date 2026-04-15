type CardProps = {
    title: string
    description: string
}

function Card({ title, description }: CardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default Card