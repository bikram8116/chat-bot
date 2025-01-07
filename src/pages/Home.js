import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar setSelectedCandidate={setSelectedCandidate} className="w-full md:w-1/4" />
        <MainContent selectedCandidate={selectedCandidate} className="w-full md:w-3/4" />
      </div>
    </div>
  );
}

export default Home;
