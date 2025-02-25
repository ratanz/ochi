
import { useState } from "react"
import dot from '../assets/dot.png'

const reviews = [
    {
        company: "Karman Ventures",
        services: ["INVESTOR DECK", "SALES DECK"],
        reviewerName: "William Barnes",
        review:
            "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
        image: "/placeholder.svg",
    },
    {
        company: "Planetly",
        services: [],
        reviewerName: "Nina Walloch",
    },
    {
        company: "Workiz Easy",
        services: [],
        reviewerName: "Tomer Levy",
    },
    {
        company: "Premium Blend",
        services: [],
        reviewerName: "Ellen Kim",
    },
    {
        company: "Hypercare Systems",
        services: [],
        reviewerName: "Brendan Goss",
    },
]

const btnName = [
    {
        name: 'investor deck'
    },
    {
        name: 'sales deck'
    }
]

export default function Client() {
    const [expandedReview, setExpandedReview] = useState()

    return (
        <div className="w-full relative bg-zinc-100 text-zinc-900 mx-auto px-4 py-8">
            <h1 className="text-5xl font-normal mb-4 text-zinc-900">Clients' reviews</h1>


            <div className="img flex absolute right-0 items-center justify-end gap-4 mb-1 px-4  ">
                <p className="w-[37vw] text-end tracking-tight leading-normal ">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                <img className="h-40 w-40 rounded-xl " src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />

            </div>

            <div className="flex gap-2 mt-10 mb-24">
                {btnName.map((item, index) => (
                    <button
                        key={index}
                        className='group relative py-1 px-4 rounded-full text-zinc-900 border border-zinc-900 uppercase overflow-hidden'
                    >
                        <span className='relative z-10 group-hover:text-zinc-100 transition-colors duration-300'>
                            {item.name}
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-full bg-zinc-900 group-hover:w-full transition-all duration-300 ease-out">
                        </div>
                    </button>
                ))}
            </div>

            {reviews.map((review, index) => (
                <div className="border-b">
                    <div key={index} className="py-8 ">
                        <div className=" relative flex items-center justify-between">
                            <a href="#" className="text-gray-900 hover:underline">
                                {review.company}
                            </a>

                            <div className="flex items-center gap-8">
                                <span className="text-gray-900">{review.reviewerName}</span>
                                <a
                                    href="#"
                                    className="group relative px-3 py-1 text-sm text-gray-500 hover:text-gray-900 uppercase overflow-hidden"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setExpandedReview(expandedReview === index ? null : index)
                                    }}
                                >
                                    Read
                                </a>
                            </div>
                        </div>

                        {expandedReview === index && review.review && review.image && (
                            <div className="mt-8 flex gap-8">
                                <div className="flex-shrink-0">
                                    <image
                                        src={review.image || "dot.png"}
                                        className="rounded-lg object-cover w-10 h-10"
                                    />
                                </div>
                                <p className="text-gray-700 leading-relaxed max-w-3xl">{review.review}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

