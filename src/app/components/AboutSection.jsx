"use client";
import React,{useTransition,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <div>
                <h3 className='text-2xl font-bold text-white'>Skills</h3>
                <ul className='list-disc list-inside mt-4'>
                    <li>Vue.js</li>
                    <li>Flask</li>
                    <li>MySQL</li>
                    <li>Redis</li>
                    <li>Pandas</li>
                    <li>Scikit-learn</li>
                </ul>
            </div>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul>
                <li className='mt-4'>B.Tech IT</li>
                <li>IIT MADRAS BSc</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <div>
                <h3 className='text-2xl font-bold text-white'>Experience</h3>
                <p className='mt-4'>Software Developer</p>
                <p>Building scalable applications</p>
            </div>
        )
    }

];

const AboutSection = () => {
    const[tab,setTab] = useState('skills');
    const [isPending,startTransition] = useTransition();

    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        });
    };
  return (
    <section className="text-white">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' alt='About' width={500} height={500} className='rounded-lg' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className='text-base lg:text:lg'>
                Enthusiastic software developer with strong expertise in full-stack development using Vue.js, Flask, MySQL, and
Redis. Experienced in building scalable, user-focused applications and managing backend operations. Skilled in
data science tools like Pandas and Scikit-learn, alongside IT support and troubleshooting. Currently a
top-performing B.Tech IT student, eager to apply my technical skills in impactful engineering roles.

                </p>
                <div className='flex flex-row  mt-8'>
                    <TabButton selectTab={()=>handleTabChange('skills')} active={tab==='skills'}>{""}Skills{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange('education')} active={tab==='education'}>{""}Education{""}</TabButton>
                    <TabButton selectTab={()=>handleTabChange('experience')} active={tab==='experience'}>{""}Experience{""}</TabButton>
                    

                </div>
                <div className='mt-8'>
                    {isPending? 'Loading...':TAB_DATA.find((tabData)=>tabData.id===tab).content}
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection;