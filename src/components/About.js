import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
         
            <br className="hidden lg:inline-block" /> My name is Anam Brazik.
          </h1>
          <p className="mb-8 leading-relaxed">
          I have lived in Columbus, Ohio since I was 11, and lived in Allentown, PA before that.
I am married and have three kids. My hobbies include reading, writing, and caring for plants.
I am currently unemployed, but used to work in the IT industry. 
I was a manual Quality Assurance Associate and also a Business Analyst for my last project which lasted about 4 years.
It was a web-based software created for an aviation company to keep track of International Trip Planning workflow for flights. 
For my project I met with the business to gather requirements, wrote User stories, Acceptance Criteria, manually tested the software and wrote bugs in JIRA. 
I am not new to IT, but I am new to coding, and very excited to learn this part of the IT industry.
          </p>
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
               My Past Work
            </a>
          </div> */}
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
    </section>
  );
}