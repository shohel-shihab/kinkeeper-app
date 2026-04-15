import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const Stats = () => {
    const { timeline } = useContext(AppContext)
    // 🔹 Count interactions
    const callCount = timeline.filter(t => t.type === "Call").length;
    const textCount = timeline.filter(t => t.type === "Text").length;
    const videoCount = timeline.filter(t => t.type === "Video").length;

    // 🔹 Chart data
    const data = [
        { name: "Text", value: textCount },
        { name: "Call", value: callCount },
        { name: "Video", value: videoCount }
    ];

    const COLORS = ["#244d3f", "#7f37f5", "#37a163"];
    return (
        <div className="p-6">

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6">
                Friendship Analytics
            </h1>

            {/* Chart Container */}
            <div className="bg-white shadow rounded p-6 ">
                 <h2 className="text-left text-[#244D3F] font-medium text-md">By Interaction Type</h2>
                <div className="flex justify-center">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            dataKey="value"
                            outerRadius={120}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell  key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>

                </div>
            </div>

        </div>
    )
}

export default Stats