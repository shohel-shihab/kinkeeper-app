
import { useEffect, useState, useContext } from "react";

import { toast } from "react-toastify";
import { FaPhone, FaSms, FaVideo, FaArchive, FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { AppContext } from "../context/AppProvider";


const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEvent } = useContext(AppContext);

  // 🔹 Load friend data
  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id == id);
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <p className="p-6">Loading...</p>;

  // 🔹 Status color
  const statusColor =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "almost due"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-green-100 text-green-600";

  // 🔹 Handle timeline event
  const handleCheckIn = (type) => {
    addEvent(type, friend.name);
    toast.success(`${type} added`);
  };

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">

      {/* ================= LEFT COLUMN ================= */}
      <div className="space-y-4">

        {/* Friend Info Card */}
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="font-bold mt-2">{friend.name}</h2>

          <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>
            {friend.status}
          </span>

          {/* Tags */}
          <div className="flex justify-center gap-2 mt-2">
            {friend.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-green-100 px-2 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm italic mt-2">"{friend.bio}"</p>

          {/* Email */}
          <p className="text-xs text-gray-500 mt-1">{friend.email}</p>
        </div>

        {/* Action Buttons */}
        <button className="w-full p-3 bg-gray-100 rounded">
          ⏰ Snooze 2 Weeks
        </button>

        <button className="w-full p-3 bg-gray-100 rounded flex items-center justify-center gap-2">
          <FaArchive /> Archive
        </button>

        <button className="w-full p-3 bg-red-100 text-red-600 rounded flex items-center justify-center gap-2">
          <FaTrash /> Delete
        </button>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="md:col-span-2 space-y-4">

        {/* ① Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white shadow p-4 rounded text-center">
            <h2 className="text-xl font-bold">
              {friend.days_since_contact}
            </h2>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white shadow p-4 rounded text-center">
            <h2 className="text-xl font-bold">{friend.goal}</h2>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white shadow p-4 rounded text-center">
            <h2 className="text-xl font-bold">
              {new Date(friend.next_due_date).toDateString()}
            </h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>

        </div>

        {/* ② Relationship Goal */}
        <div className="bg-white shadow p-4 rounded flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-sm text-gray-600">
              Connect every {friend.goal} days
            </p>
          </div>

          <button className="px-3 py-1 bg-gray-200 rounded">
            Edit
          </button>
        </div>

        {/* ③ Quick Check-In */}
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">

            <button
              onClick={() => handleCheckIn("Call")}
              className="p-4 border rounded flex flex-col items-center gap-2 hover:bg-gray-100"
            >
              <FaPhone />
              Call
            </button>

            <button
              onClick={() => handleCheckIn("Text")}
              className="p-4 border rounded flex flex-col items-center gap-2 hover:bg-gray-100"
            >
              <FaSms />
              Text
            </button>

            <button
              onClick={() => handleCheckIn("Video")}
              className="p-4 border rounded flex flex-col items-center gap-2 hover:bg-gray-100"
            >
              <FaVideo />
              Video
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default FriendDetails