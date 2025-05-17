import React from "react";

export default function Portfolio() {
  const projects = [
    {
      img: "/digiocean.webp",
      title: "Digi-Ocean",
      type: "Mobile Application for my college students",
      period: "August 2023",
      desc: "Showcasing engineering-related news on homepage. It offers access to various helpful resources specific to Thapar University, including LMS, Webkiosk, MyHerupa, and others.",
      tech: ["UI design", "In-app browser", "News API", "Google Ads", "Firebase"],
      href: "https://github.com/Pankaj1662005/Travel"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&s",
      title: "Stream-it",
      type: "Free movie streaming app for Android TV and mobile devices (iOS/Android)",
      period: "January 2024",
      desc: "The idea was inspired by Pikashow, a free movie streaming application.",
      tech: ["Authentication", "In-app messaging", "Built-in app updates & Version Control", "TMDB API"],
      href: "https://github.com/Pankaj1662005/Streamer_movie_App"
    },
    {
      img: "/weather.jpg",
      title: "Machine Learning Fake News Detection App",
      type: "End-to-end mobile app using ML deployed via Flask API & Flutter frontend",
      period: "October 2024",
      desc: "Achieving 93% accuracy in detecting fake news.",
      tech: ["Python", "Scikit-learn", "Flask", "Flutter", "TF-IDF", "Git & GitHub", "Precision/Recall/F1-Score"],
      href: "https://github.com/Pankaj1662005/weather2"
    },
    {
      img: "/ai.jpg",
      title: "Portfolio Website",
      type: "Personal Portfolio Website",
      period: "March 2023",
      desc: "A personal portfolio website to showcase my projects, skills, and experience.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      href: "https://github.com/Pankaj1662005/portfolio"
    }
  ];

  return (
    <section className="mb-16 mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight mb-3">Projects Experience</h2>
      <div className="w-20 h-1 bg-[#e1a27a] mb-6 rounded-full" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232325] p-7 rounded-2xl flex flex-col shadow-md hover:scale-105 transition-transform duration-150 cursor-pointer"
          >
            <img src={proj.img} alt={proj.title} className="h-40 w-full object-cover rounded-lg mb-4 bg-[#333]" />
            <span className="font-bold text-xl mb-1">{proj.title}</span>
            <span className="block text-sm text-[#e1a27a] font-semibold mb-2">{proj.type}</span>
            <span className="text-xs text-neutral-400 mb-4">{proj.period}</span>
            <p className="text-neutral-300 text-sm mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((tech) => (
                <span key={tech} className="bg-[#111] text-[#e1a27a] text-xs rounded px-3 py-1 font-medium">{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
