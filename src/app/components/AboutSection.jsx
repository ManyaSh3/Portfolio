"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
      title: "Skills",
      id: "skills",
      content: (
          <div className="bg-[#181818] p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
              Technical Skills
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>
                <span className="text-primary-500 font-medium">Programming Languages:</span>{" "}
                HTML, CSS, JavaScript, Python, C++, Java
              </li>
              <li>
                <span className="text-primary-500 font-medium">Backend Technologies:</span>{" "}
                MySQL, MongoDB, Flask, Redis, Celery, Celery Beat
              </li>
              <li>
                <span className="text-primary-500 font-medium">Frontend Technologies:</span>{" "}
                Vue.js, Bootstrap
              </li>
              <li>
                <span className="text-primary-500 font-medium">Development Tools:</span>{" "}
                Linux, Git, Visual Studio Code
              </li>
              <li>
                <span className="text-primary-500 font-medium">Data Science:</span>{" "}
                Pandas, NumPy, Scikit-learn, Matplotlib
              </li>
            </ul>
          </div>
      )
  },
  {
      title: "Education",
      id: "education",
      content: (
          <div className="p-6 bg-[#121212] rounded-lg shadow-lg border border-gray-700 text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
              Education
            </h3>
            <div className="mb-4">
              <p className="text-lg font-medium text-primary-500">B.Tech in Information Technology</p>
              <p className="text-gray-400">GGSIPU (2021 - 2025)</p>
            </div>
            <div>
              <p className="text-lg font-medium text-primary-500">BSc in Programming & Data Science</p>
              <p className="text-gray-400">IIT Madras (2021 - 2026)</p>
            </div>
          </div>
      ),
  },
  {
      title: "Experience",
      id: "experience",
      content: (
          <div className="p-6 bg-[#121212] rounded-lg shadow-lg border border-gray-700 text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
              Work Experience
            </h3>

            <div className="mb-6">
              <p className="text-lg font-medium text-primary-500">Database and Content Management Intern</p>
              <p className="text-gray-400 italic">ViewSonic Technologies India Pvt. Ltd. | March 2024 - August 2024</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed and optimized backend workflows using Python and SQL.</li>
                <li>Automated database maintenance tasks, improving efficiency.</li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium text-primary-500">Software Developer Intern</p>
              <p className="text-gray-400 italic">C-DAC Delhi | October 2024 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Designed UI components for an online voting system.</li>
                <li>Managed PostgreSQL database on Neon for real-time vote storage.</li>
                <li>Developed secure user authentication using HTML & JavaScript.</li>
              </ul>
            </div>
          </div>
      ),
  }
];

const AboutSection = () => {
    const [tab, setTab] = useState('education');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return (
        <section id="about" className="text-white">
            <div className='flex flex-col md:flex-row gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                {/* Image column - fixed height with sticky positioning */}
                <div className="md:w-1/2 flex-shrink-0">
                    <div className="md:sticky md:top-20">
                        <Image 
                            src='/images/about-image.png' 
                            alt='About' 
                            width={500} 
                            height={500} 
                            className='rounded-lg w-full'
                        />
                    </div>
                </div>
                
                {/* Content column */}
                <div className='md:w-1/2 mt-4 md:mt-0 text-left flex flex-col'>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Enthusiastic software developer with strong expertise in full-stack development using Vue.js, Flask, MySQL, and
                        Redis. Experienced in building scalable, user-focused applications and managing backend operations. Skilled in
                        data science tools like Pandas and Scikit-learn, alongside IT support and troubleshooting. Currently a
                        top-performing B.Tech IT student, eager to apply my technical skills in impactful engineering roles.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>{""}Education{""}</TabButton>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>{""}Skills{""}</TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>{""}Experience{""}</TabButton>
                    </div>
                    <div className='mt-8'>
                        {isPending ? 'Loading...' : TAB_DATA.find((tabData) => tabData.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;