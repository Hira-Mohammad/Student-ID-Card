

"use client";
// page.tsx
import React from "react";
import StudentCard from "./card/page";

const students = [
  {
    name: "Hassan",
    age: 16,
    rollNumber: "05198",
    className: "GIAIC",
    imageUrl: "./pictures/xyz.jpeg",
  },
  {
    name: "Arih",
    age: 17,
    rollNumber: "02367",
    className: "GIAIC",
    imageUrl: "./pictures/aa.png",
  },
  {
    name: "Mudassir",
    age: 18,
    rollNumber: "01234",
    className: "GIAIC",
    imageUrl: "./pictures/ABC.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-yellow-300 p-8">
      <h1 className="text-5xl font-bold capitalize text-left mb-8">
        Student ID Cards
      </h1>
      <div className="flex flex-wrap justify-start gap-8">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}
