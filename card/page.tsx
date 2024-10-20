'use client';
// studentcard.tsx
import React from "react";

// Define the type for the student prop
type Student = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  imageUrl: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card bg-blue-400 p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-white">
      <div className="text-left space-y-2">
        <img
          src={student.imageUrl}
          alt={student.name}
          className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl md:text-2xl font-semibold">{student.name}</h2>
        <p className="text-sm md:text-base">Age: {student.age}</p>
        <p className="text-sm md:text-base">Roll Number: {student.rollNumber}</p>
        <p className="text-sm md:text-base">Class: {student.className}</p>
      </div>
    </div>
  );
};

export default StudentCard;
