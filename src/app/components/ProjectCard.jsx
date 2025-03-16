import React from 'react';
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description,gitUrl,previewUrl,techStack }) => {
  return (
    <div className="group">
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link 
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
          </Link>

          {/* Show Preview Icon ONLY for the AMT Project */}
          {previewUrl && previewUrl !== "/" && (
            <Link 
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
          )}           
        </div>
        
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-400 text-lg leading-relaxed flex-1">{description}</p>

        {/* Tech Stack Section */}
        {techStack && (
          <p className="text-gray-300 font-medium mt-3 border-t border-gray-600 pt-2">
            <span className="text-primary-500 font-semibold">Tech Stack:</span> {techStack}
          </p>
        )}

      </div>
    </div>
  );
}
export default ProjectCard;
