import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const sampleEvents = [
  {
    id: 1,
    title: "Community Prayer Gathering",
    date: "2025-03-25",
    location: "New Delhi, India",
    category: "Religious",
    description: "Join us for a peaceful prayer session and community bonding.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Food Drive for the Homeless",
    date: "2025-04-05",
    location: "Mumbai, India",
    category: "Charity",
    description: "Helping the less fortunate by providing free meals.",
    image: "https://plus.unsplash.com/premium_photo-1716937388508-89ea3aa90b30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Youth Networking Meetup",
    date: "2025-04-12",
    location: "Bangalore, India",
    category: "Social",
    description: "A fun and engaging meetup to network with like-minded individuals.",
    image: "https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "Religious",
    location: "",
    description: "",
    image: "",
  });

  // Filtering function
  const filteredEvents =
    filteredCategory === "All"
      ? events
      : events.filter((event) => event.category === filteredCategory);

  // Function to add a new event
  const addEvent = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.image) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Adding event:", newEvent); // Debugging log

    setEvents((prevEvents) => [
      ...prevEvents,
      { id: prevEvents.length + 1, ...newEvent },
    ]);

    console.log("Updated Events:", events); // Check if the events state updates

    setNewEvent({
      title: "",
      date: "",
      category: "Religious",
      location: "",
      description: "",
      image: "",
    });

    setIsModalOpen(false);
  };

  return (
    <section className="bg-black text-white pt-10 px-6 pb-10">
      <motion.h2
        className="text-4xl font-semibold text-center mb-8 fade-in"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Upcoming Events
      </motion.h2>

      <div className="flex justify-between items-center gap-4 mb-6 max-sm:block">
        <div className="flex gap-5 max-sm:mb-4">
          {["All", "Religious", "Social", "Charity"].map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-[50px] border ${
                filteredCategory === category ? "bg-[#E48664] text-white" : "border-white"
              }`}
              onClick={() => setFilteredCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center flex justify-center items-center">
          <button
            className="bg-[#E48664] text-white py-2 px-3 rounded-[50px] text-[16px] flex items-center gap-2 hover:bg-[#c96b50]"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlus /> Add New Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="bg-[#A9E2EB] p-4 rounded-lg text-black fade-in shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={event.image} alt={event.title} className="rounded-lg mb-4 w-full h-50 object-cover" />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-700">{event.date} | {event.location}</p>
              <p className="mt-2">{event.description}</p>
              <span className="mt-4 inline-block px-3 py-1 bg-black text-white rounded-[50px] text-sm">
                {event.category}
              </span>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">No events found.</p>
        )}
      </div>

      {isModalOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-[#E48664] text-black p-6 rounded-lg w-[90%] md:w-[500px]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">Add New Event</h3>
              <IoClose size={28} className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
            </div>
            <form onSubmit={addEvent} className="grid gap-4">
              <input
                type="text"
                placeholder="Event Title"
                className="p-2 border-x-0 border-t-0 border border-gray-300 w-full focus:outline-none"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <input
                type="date"
                className="p-2 border-x-0 border-t-0 border border-gray-300 w-full focus:outline-none"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                className="p-2 border-x-0 border-t-0 border border-gray-300 w-full focus:outline-none"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              <select
                className="p-2 border-x-0 border-t-0 border border-gray-300 w-full focus:outline-none"
                value={newEvent.category}
                onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
              >
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
              <input
                type="text"
                placeholder="Image URL"
                className="p-2 border border-x-0 border-t-0 border-gray-300 w-full focus:outline-none"
                value={newEvent.image}
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
              />
              <button className="bg-black text-white py-2 px-4 rounded-[50px] w-full hover:bg-gray-800">
                Add Event
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Events;
