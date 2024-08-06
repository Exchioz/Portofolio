import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Modal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-4 max-h-[90vh] overflow-auto"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 dark:text-gray-400"
          ></button>
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
            <ul className="mb-3 list-disc pl-5 font-normal text-gray-700 dark:text-gray-400 text-justify">
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
