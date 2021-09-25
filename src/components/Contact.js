import React from "react";
export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          <a href="https://www.linkedin.com/in/anam-brazik-5ab7bb77">Linkedin</a>
            <br className="hidden lg:inline-block" /> <a href="mailto:anam.brazik@gmail.com">Email</a>
            <br className="hidden lg:inline-block" />  <a href="https://github.com/abrazik">Github</a>
            <br className="hidden lg:inline-block" />  614.633.5715 
         
          </h1>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          /> */}
        </div>
      </div>
    </section>
  );
}