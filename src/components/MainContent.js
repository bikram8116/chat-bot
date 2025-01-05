import React, { useState, useEffect, useRef } from 'react';
import { PhoneIcon, VideoCameraIcon, DotsVerticalIcon } from '@heroicons/react/solid';
function MainContent({ selectedCandidate }) {
  const [activeTab, setActiveTab] = useState('Message');
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { sender: 'JD', text: "Of course! I’ve been a UI/UX designer for 2 years, primarily working in the Salesforce domain. I focus on user-centric designs and hold a Salesforce Administrator certification." },
    { sender: 'You', text: 'Hi, can you briefly tell me about your experience?' },
    { sender: 'JD', text: 'Great! How do you handle client requirements in your projects?' },
    { sender: 'JD', text: 'I use design thinking to balance client needs with user experience. For example, in a recent Salesforce Health Cloud project, I streamlined complex client requests into simple, intuitive interfaces.' },
    { sender: 'You', text: 'Excellent. Lastly, how do you stay updated with the latest design trends and tools?' },
    { sender: 'JD', text: 'I follow design blogs and attend conferences to stay updated. I also experiment with new tools in my personal projects.' },
    { sender: 'You', text: 'That sounds great. What do you think about the importance of collaboration in UI/UX design?' },
    { sender: 'JD', text: 'Collaboration is crucial! Working with developers, product managers, and clients ensures that the design meets both user needs and technical constraints.' },
    { sender: 'You', text: 'I agree. How do you handle feedback, especially if it\'s critical?' },
    { sender: 'JD', text: 'I always take feedback positively. It\'s an opportunity to improve the design. I focus on the goals behind the feedback and iterate based on that.' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      const newMessageObj = { sender: 'You', text: newMessage };
      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      setNewMessage('');
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {selectedCandidate ? (
        <div className="flex-1 bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{selectedCandidate.name}</h2>
            <div className="flex space-x-4">
              <PhoneIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              <VideoCameraIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              <DotsVerticalIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex border-b mt-4">
            {['Message', 'Email', 'Text'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
            {activeTab === 'Message' && (
              <div className="space-y-4 mt-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start ${message.sender === 'You' ? 'justify-end' : ''}`}>
                    <div className={`flex items-center ${message.sender === 'You' ? 'order-last ml-2' : 'mr-2'}`}>
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        {message.sender === 'You' ? 'You' : 'JD'}
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${message.sender === 'You' ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Add ref for scrolling */}
              </div>
            )}
            {activeTab === 'Email' && <p>No emails available.</p>}
            {activeTab === 'Text' && <p>No text messages available.</p>}
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Please select any project and candidates</p>
        </div>
      )}
    </>
  );
}

export default MainContent;