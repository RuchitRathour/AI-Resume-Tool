import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);

  // ✅ PRINT FUNCTION
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Resume Content */}
      <div
        ref={resumeRef}
        className="resume-print max-w-4xl mx-auto p-4 space-y-3 bg-white text-black border"
      >
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">
            {data?.personalInformation?.fullName}
          </h1>
          <p className="text-sm">
            {data?.personalInformation?.location}
          </p>

          <div className="flex justify-center gap-3 flex-wrap text-sm">
            {data?.personalInformation?.email && (
              <span>
                <FaEnvelope className="inline mr-1" />
                {data.personalInformation.email}
              </span>
            )}
            {data?.personalInformation?.phoneNumber && (
              <span>
                <FaPhone className="inline mr-1" />
                {data.personalInformation.phoneNumber}
              </span>
            )}
          </div>

          <div className="flex justify-center gap-3 text-sm">
            {data?.personalInformation?.gitHub && (
              <a href={data.personalInformation.gitHub} target="_blank">
                <FaGithub className="inline mr-1" /> GitHub
              </a>
            )}
            {data?.personalInformation?.linkedIn && (
              <a href={data.personalInformation.linkedIn} target="_blank">
                <FaLinkedin className="inline mr-1" /> LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        <section>
          <h2 className="text-base font-bold border-b">Summary</h2>
          <p className="text-sm">{data?.summary}</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-base font-bold border-b">Skills</h2>
          <div className="flex flex-wrap gap-1 text-sm">
            {data?.skills?.map((skill, i) => (
              <span key={i} className="border px-2 py-0.5 rounded">
                {skill.title}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-base font-bold border-b">Experience</h2>
          {data?.experience?.map((exp, i) => (
            <div key={i} className="text-sm">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <p>{exp.company}</p>
              <p className="text-gray-600">{exp.duration}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-base font-bold border-b">Education</h2>
          {data?.education?.map((edu, i) => (
            <div key={i} className="text-sm">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p>{edu.university}</p>
              <p className="text-gray-600">{edu.graduationYear}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-base font-bold border-b">Projects</h2>
          {data?.projects?.map((proj, i) => (
            <div key={i} className="text-sm">
              <h3 className="font-semibold">{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-base font-bold border-b">Languages</h2>
          <ul className="list-disc pl-5 text-sm">
            {data?.languages?.map((l, i) => (
              <li key={i}>{l.name}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrint}
          className="btn bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Resume;