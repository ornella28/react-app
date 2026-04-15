type CardProps = {
    title: string
    description: string
    image: string
    category: string
}

function Card({ title, description, image, category }: CardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-40 object-cover" />

            <div className="p-4">
        <span className="text-sm text-blue-600 font-semibold">
          {category}
        </span>

                <h2 className="text-xl font-bold mt-1">{title}</h2>

                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default Card