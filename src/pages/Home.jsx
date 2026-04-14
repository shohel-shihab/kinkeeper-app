import React from 'react'
import Hero from '../components/Hero'
import HeroCard from '../components/HeroCard'
import { useLoaderData } from 'react-router'
import FriendCard from '../components/FriendCard'

const Home = () => {
    const friends = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto'>
            <Hero></Hero>
            <HeroCard />

            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Your Friends
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {friends.map((f) => (
                        <FriendCard key={f.id} friend={f} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home