import { useContext, useState } from "react";
import { FaPhone, FaSms, FaVideo, FaHandshake } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";

const  Timeline=()=> {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState("All");


  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);


  const getIcon = (type) => {
    if (type === "Call") return <FaPhone className="text-gray-600" />;
    if (type === "Text") return <FaSms className="text-gray-600" />;
    if (type === "Video") return <FaVideo className="text-gray-600" />;
    if (type === "Meetup") return <FaHandshake className="text-yellow-500" />;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 px-4 py-2 border rounded bg-white"
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline List */}
      <div className="space-y-3">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg"
          >
            {/* Icon */}
            <div className="text-xl">
              {getIcon(item.type)}
            </div>

            {/* Content */}
            <div>
              <p className="font-medium">
                <span className="font-semibold">{item.type}</span>{" "}
                with {item.title.split("with ")[1]}
              </p>

              <p className="text-sm text-gray-600">
                {new Date(item.date).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTimeline.length === 0 && (
        <p className="text-gray-500 mt-4">No interactions found</p>
      )}

    </div>
  );
}

export default Timeline;