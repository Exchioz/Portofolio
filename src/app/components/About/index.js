"use client";
import React, { useState } from "react";
import AboutMe from "./Tabs/aboutme";
import Experiences from "./Tabs/experiences";
import Educations from "./Tabs/educations";
import Skills from "./Tabs/skills";

export default function Page() {
  const tabs = [
    { id: "tab1", label: "About Me", content: <AboutMe /> },
    { id: "tab2", label: "Experience", content: <Experiences /> },
    { id: "tab3", label: "Education", content: <Educations /> },
    { id: "tab4", label: "Skills", content: <Skills /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderContent = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    return <div>{activeTabData ? activeTabData.content : tabs[0].content}</div>;
  };

  return (
    <div className="flex flex-col md:flex-row h-auto w-auto py-14">
      {/* Dropdown for small screens */}
      <div className="block md:hidden w-full p-4">
        <button
          className="w-full bg-gray-700 text-gray-300 rounded-2xl p-4 mb-4"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {tabs.find((tab) => tab.id === activeTab)?.label}
        </button>
        {isDropdownOpen && (
          <div className="bg-gray-700 rounded-2xl">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`p-4 mb-2 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsDropdownOpen(false);
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar for medium and large screens */}
      <div className="hidden md:block w-full md:w-1/4 p-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`rounded-2xl p-4 mb-4 cursor-pointer ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="w-full md:w-3/4 p-4 h-dvh">
        <div className="text-white self-start">{renderContent()}</div>
      </div>
    </div>
  );
}
