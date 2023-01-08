import React from "react";
import { CodeIcon } from "@heroicons/react/solid"
import { projects } from "../data";

export default function Projects(){
    return (
        <section id="projects">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="w-10 inline-block mx-auto mb-4"/>
                    <h1 className="font-meduim text-center text-3xl title-font text-white mb-4">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are some projects I’ve been working on recently, I hope you’ll take a look at them!.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img 
                                    alt=""
                                    src={project.image}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.subtitle}
                                    </h1>
                                    <p className="leaing-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
} 