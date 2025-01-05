import React, { useState } from "react";

function Sidebar({ setSelectedCandidate }) {
  const [isProjectExpanded, setProjectExpanded] = useState(false);
  const [isCandidatesExpanded, setCandidatesExpanded] = useState(false);

  return (
    <div className="w-full md:w-1/4 bg-gray-50 p-4">
      {/* Project Name Section */}
      <div className="mb-4">
        <button
          className="w-full text-left bg-white border border-gray-300 p-3 rounded flex justify-between items-center"
          onClick={() => setProjectExpanded(!isProjectExpanded)}
        >
          <span className="font-medium">Project Name</span>
          <span>{isProjectExpanded ? "▼" : "➤"}</span>
        </button>
        {isProjectExpanded && (
          <div className="mt-2 bg-white border border-gray-200 rounded p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-2 border border-gray-300 rounded text-sm"
            />
                        <div className="space-y-2">
                            {/* Project Items */}
                            {[
                                { name: "UI/UX Designer", count: "+35" },
                                { name: "Application Developer", count: "+10" },
                                { name: "Automation Tester", count: "+10" },
                                { name: "Business Analyst", count: "+10" },
                                { name: "Business Analyst", count: "+10" },
                                { name: "Application Developer", count: "+10" },
                                { name: "Automation Tester", count: "+10" },
                                { name: "Business Analyst", count: "+10" },
                            ].map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-100 rounded"
                >
                  <span className="font-medium text-sm">{project.name}</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-medium z-20">
                      GD
                    </div>
                    <div className="w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-xs font-medium z-30">
                      JT
                    </div>
                    <div className="w-6 h-6 bg-pink-200 text-pink-700 rounded-full flex items-center justify-center text-xs font-medium z-40">
                      HP
                    </div>
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-medium z-50 border-2 border-gray-300">
                      +35
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Candidates Section */}
      <div>
        <button
          className="w-full text-left bg-white border border-gray-300 p-3 rounded flex justify-between items-center"
          onClick={() => setCandidatesExpanded(!isCandidatesExpanded)}
        >
          <span>Candidates</span>
          <span>{isCandidatesExpanded ? "▼" : "➤"}</span>
        </button>
        {isCandidatesExpanded && (
          <div className="mt-2 bg-white border border-gray-200 rounded p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array(10)
                .fill({
                  name: "Jill James",
                  description:
                    "I regularly explore design blogs, attend webinars, and collaborate with peers to stay updated on the latest trends in design and technology.",
                  count: 3,
                  timeAgo: "3 mins ago",
                })
                .map((candidate, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col p-4 bg-gray-100 rounded min-h-[120px] overflow-hidden"
                    onClick={() => setSelectedCandidate(candidate)} 
                  >
                    {/* Top Section */}
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                        GD
                      </div>
                      <div className="text-sm font-medium">{candidate.name}</div>
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-500 line-clamp-2 mb-4">
                      {candidate.description}
                    </div>

                    {/* Count in the upper-right corner */}
                    <div className="absolute top-2 right-2 text-blue-500 font-medium bg-white rounded-full w-6 h-6 flex items-center justify-center border border-blue-500">
                      {candidate.count}
                    </div>

                    {/* Time in the lower-right corner */}
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                      {candidate.timeAgo}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
