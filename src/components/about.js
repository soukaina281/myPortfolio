import React from "react";

export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 items-center">
                <div className="container lg:flex-grow lg:pr-24 flex-col items-center">
                    <h1 className="text-white title-font text-3xl font-medium mb-4">
                        Hi, I'm Soukaina.
                        <br className="hidden lg:inline-block"/>I love to build amazing apps
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a forth-year student at national school of applied sciences. I am 
                        currently studying computer sciences. And I am very passionate about this 
                        field because it's all about problem solving and that's what I love to do.
                    </p>
                    <div className="flex">
                        <a 
                            href="#contact"
                            className="bg-green-500 hover:bg-green-600 text-white inline-flex py-2 px-6 rounded text-lg">
                            Work With Me
                        </a>
                        <a 
                            href="#projects"
                            className="ml-4 hover:bg-gray-700 bg-gray-800 hover:text-white text-gray-400 inline-flex py-2 px-6 rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt=""
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
