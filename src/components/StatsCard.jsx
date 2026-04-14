import React from 'react'

const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-2xl font-bold text-[#244D3F]">{value}</p>
            <h2 className="text-[#64748B]">{title}</h2>
        </div>
    )
}

export default StatsCard