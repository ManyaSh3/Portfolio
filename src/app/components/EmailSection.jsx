"use client";
import React,{useState} from 'react'
import Link from 'next/link'
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Image from 'next/image';


const EmailSection = () => {
    const [emailSubmitted,setEmailSubmitted]=useState(false);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
            email:e.target.email.value,
            subject:e.target.subject.value,
            message:e.target.message.value
        }
        const JSONdata=JSON.stringify(data);
        const endpoint="/api/send";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSONdata
        }

        const reponse=await fetch(endpoint,options);
        const resData=await reponse.json();
        
        if(response.status===200){
            console.log("Email sent successfully");
            setEmailSubmitted(true);
        }
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {""}
                I'm currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label 
                    htmlFor="email" 
                    type="email" 
                    className='text-white block text-sm mb-2 font-medium '>
                    Your email
                </label>
                <input 
                    type="email" 
                    name="email"
                    id="email" 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5 '
                    placeholder="abc@gmail.com"
                />
                </div>
                <div className="mb-6"> 
                <label 
                    htmlFor="subject" 
                    type="email" 
                    className='text-white block text-sm mb-2 font-medium '
                >
                    Subject
                </label>
                <input 
                    name="subject"
                    type="text" 
                    id="subject" 
                    required 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5 '
                    placeholder="Just saying hi!"
                />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"  
                        type="email"
                        className='text-white block text-sm mb-2 font-medium '
                    >
                        Message 
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5 ' 
                        placeholder="Let's talk about..."
                    />
                </div>
                <button 
                    type="submit" 
                    className='bg-purple-500 hover:bg-purple-600 text-white rounded-lg py-2.5 px-5 w-full font-medium'
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className="text-green-500 mt-2 text-sm">
                            Email sent successfully!
                        </p>
                    )
                }

            </form>
        </div>
    </section>
  )
}

export default EmailSection