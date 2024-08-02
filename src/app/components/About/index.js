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

  const renderContent = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    return <div>{activeTabData ? activeTabData.content : tabs[0].content}</div>;
  };

  return (
    <div className="flex flex-col md:flex-row h-auto w-auto py-14">
      <div className="w-full md:w-1/4 p-4">
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
      <div className="w-full md:w-3/4 p-4 h-dvh">
        <div className="text-white self-start">{renderContent()}</div>
      </div>
    </div>
  );
}
