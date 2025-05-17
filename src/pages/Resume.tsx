import React from "react";

export default function Resume() {
  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Resume</h2>
      <div className="w-14 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">B.Tech, Computer Engineering (2021-2025)</span>
              <h4 className="text-lg font-bold">Thapar Institute of Engineering and Technology</h4>
              <div className="text-[#b3b3b3] mb-2">CGPA: 8.12 (till 6th sem)</div>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">12th (CBSE, 2021)</span>
              <h4 className="text-lg font-bold">Govt. Sr. Sec. School, Rohtak</h4>
              <div className="text-[#b3b3b3] mb-2">Score: 95.2%</div>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">10th (CBSE, 2019)</span>
              <h4 className="text-lg font-bold">Govt. Sr. Sec. School, Rohtak</h4>
              <div className="text-[#b3b3b3] mb-2">Score: 94.6%</div>
            </div>
          </div>
        </div>
        {/* Projects & Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Projects & Experience</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">AI-Powered Resume Parser (Jan 2024 - Mar 2024)</span>
              <h4 className="text-lg font-bold">Personal Project</h4>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Developed a web app to extract structured data from resumes using Python, FastAPI, and NLP.</li>
                <li>Integrated OpenAI GPT-3.5 for semantic analysis and MongoDB for data storage.</li>
              </ul>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">Smart Attendance System (Aug 2023 - Nov 2023)</span>
              <h4 className="text-lg font-bold">Academic Project</h4>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Built a face recognition-based attendance system using Python, OpenCV, and Flask.</li>
                <li>Achieved 97% accuracy in real-time student identification and attendance marking.</li>
              </ul>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-2">Intern, Web Development (May 2023 - Jul 2023)</span>
              <h4 className="text-lg font-bold">CodeClause</h4>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Developed and deployed responsive websites using React.js and Node.js.</li>
                <li>Worked on REST APIs, authentication, and UI/UX improvements.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 mt-8">Certifications</h3>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Python for Everybody Specialization (Coursera, 2022)</span>
              <ul className="list-disc list-inside ml-2 text-[#cccccc] text-sm mt-2 space-y-1">
                <li>Completed all 5 courses including Data Structures, Web Data, and Databases.</li>
              </ul>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Data Structures and Algorithms (Coding Ninjas, 2023)</span>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">Machine Learning with Python (Coursera, 2023)</span>
            </div>
            <div className="bg-[#232325] rounded-2xl p-5 shadow-md">
              <span className="block text-[#e1a27a] font-semibold mb-1">AWS Cloud Practitioner Essentials (AWS, 2024)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
