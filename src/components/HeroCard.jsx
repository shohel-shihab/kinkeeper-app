
import StatsCard from './StatsCard'
const HeroCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <StatsCard title="Total Friends" value={10} />
            <StatsCard title="On Track" value={3} />
            <StatsCard title="Need Attention" value={6} />
            <StatsCard title="Interactions" value={12} />
        </div>
    )
}

export default HeroCard