import { useContext } from "react";
import { FaPhone, FaSms, FaVideo } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";

export default function Timeline() {
  const { timeline } = useContext(AppContext);

  // 🔹 choose icon based on type
  const getIcon = (type) => {
    if (type === "Call") return <FaPhone className="text-green-600" />;
    if (type === "Text") return <FaSms className="text-blue-600" />;
    if (type === "Video") return <FaVideo className="text-purple-600" />;
  };

  return (
    <div className="p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* Empty state */}
      {timeline.length === 0 && (
        <p className="text-gray-500">No interactions yet</p>
      )}

      {/* Timeline list */}
      <div className="space-y-4">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white shadow p-4 rounded"
          >
            {/* Icon */}
            <div className="text-xl">
              {getIcon(item.type)}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}