import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setSelectedCandidate={setSelectedCandidate} />
        <MainContent selectedCandidate={selectedCandidate} />
      </div>
    </div>
  );
}

export default Home;
