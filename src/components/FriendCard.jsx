import React from 'react'
import { Link } from 'react-router'

const FriendCard = ({ friend }) => {
    const statusColor =
        friend.status === "overdue"
            ? "bg-red-100 text-red-600"
            : friend.status === "almost due"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600";
    return (
        <Link to={`/friend/${friend.id}`}>
            <div className="p-4 shadow rounded text-center">
                <img
                    src={friend.picture}
                    className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="mt-2 font-semibold">{friend.name}</h2>
                <p className="text-sm">{friend.days_since_contact} days ago</p>

                <div className="flex justify-center gap-2 mt-2">
                    {friend.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-200 px-2 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${statusColor}`}>
                    {friend.status}
                </span>
            </div>
        </Link>
    )
}

export default FriendCard