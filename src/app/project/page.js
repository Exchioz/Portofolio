"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./modal.js";
import img_smartparking from "../assets/smartparking.png";
import img_licenseext from "../assets/licenseext.png";
import img_gateiot from "../assets/gaiot.png";
import img_evoting from "../assets/evoting.png";
import img_laundryapp from "../assets/laundry.png";

const projects = [
  {
    title: "Smart Parking System",
    image: img_smartparking,
    date: "Feb 2024 – Apr 2024",
    points: [
      "Developed an Android app using Kotlin for online parking reservations, integrated with a RESTful API",
      "Built the server using Flask and MySQL, employing tunneling techniques to design a local server that can be accessed externally via the API",
      "Created a prototype gate system using a Raspberry Pi, which validates license plates by matching detected characters with the server",
    ],
  },
  {
    title: "License Plate Extraction",
    image: img_licenseext,
    date: "Apr 2024 – Jul 2024",
    points: [
      "Utilized an existing dataset for license plate detection and collected a custom dataset for character recognition, performing several preprocessing steps on the character data",
      "Conducted training in Visual Studio Code using Python, employing a technique that detects the license plate area using a YOLO model and then classifies each character using a CNN",
      "Achieved high accuracy with evaluation metrics, showing 0.99 for the CNN and 0.991 for the YOLO model",
    ],
  },
  {
    title: "Smart Gate IoT",
    image: img_gateiot,
    date: "Sep 2023 – Dec 2023",
    points: [
      "Developed a residential gate system restricted to registered homeowners. Upon user login, the system generates a unique string that is converted into a QR code",
      "Equipped the gate with an ESP32-CAM, programmed using C++ to capture images of QR codes. The captured images are sent to a Flask server for processing",
      "Implemented QR code detection using OpenCV on the Flask server, where the codes are validated to control gate access",
    ],
  },
  {
    title: "Laundry Mobile App",
    image: img_laundryapp,
    date: "Sep 2023 – Dec 2023",
    points: [
      "Developed a mobile application using Kotlin for managing laundry orders between users and laundry shop owners",
      "The app allows customers to place laundry orders based on available services, while administrators can update order statuses in real-time",
      "Data is stored in a local SQLite database, which handles the storage and management of order information",
    ],
  },
  {
    title: "E-voting Web",
    image: img_evoting,
    date: "Sep 2023 – Dec 2023",
    points: [
      "Developed a web-based voting system for electing the chairman and vice-chairman using HTML and Bootstrap for the front end.",
      "Implemented PHP as the backend to manage user authentication, allowing only one-time logins per user. PHP was also used to send user credentials (email and password) to registered users via email",
      "Utilized MySQL as the database to store and manage voting information and user data",
    ],
  },
  // Add more projects here if needed
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMoreClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="px-10 py-14 md:px-20 lg:px-28 xl:px-36">
      <h2 className="text-4xl font-bold my-10 text-center text-gray-900 dark:text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            onClick={() => handleReadMoreClick(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-t-lg"
              width={600}
              height={400}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}
