import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import usa from '../assets/usa.svg'
import ksa from '../assets/ksa.svg';
import logo from '../assets/logo.png';
import tick from '../assets/tick.svg';
const Menu = ({ isOpen, onClose }) => {
    const navigationLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Articles', path: '/article' },
        { name: 'UI Store', path: '/store' }
    ];
    const languages = [
        {
            name: 'English',
            flag: usa
        },
        {
            name: 'Arabic',
            flag: ksa
        },

    ];

    const categories = [
        {
            title: 'UI/UX Designing',
            items: ['User Research', 'Information Architecture', 'Visual Design', 'Accessibility Testing', 'Design Handoff'],
            icon: tick
        },
        {
            title: 'Branding',
            items: ['Brand Strategy', 'Brand Design', 'Brand Audits', 'Brand Storytelling', 'Brand Refresh'],
            icon: tick
        },
        {
            title: 'Graphic Designing',
            items: ['Print Design', 'Packaging Design', 'Illustration', 'Infographic Design', 'Layout and Composition'],
            icon: tick
        },
        {
            title: 'Motion Graphic Designing',
            items: ['Animation', 'Video Editing', 'Motion Graphics for Social Media', 'Explainer Videos', 'Kinetic Typography'],
            icon: tick
        }
    ];

    return (
        <div className={`fixed z-50 top-0 left-0 ${isOpen ? 'w-full' : 'w-0'} h-screen transition-all duration-500 bg-[#02111B] overflow-hidden`}>
            <button
                className="absolute top-4 right-4 p-2 text-white"
                onClick={onClose}
            >
                <CgClose size={24} />
            </button>

            {isOpen && (
                <nav className="p-4 sm:p-6 md:p-8 overflow-y-auto h-full">
                    <div className="flex flex-col lg:flex-row">
                        <div className="text-left text-[#20D091] w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
                            {/* <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Esinair</h1> */}
                            <img src={logo} className="mb-6 sm:h-6 " alt="" />

                            <ul className="space-y-4 sm:space-y-6">
                                {navigationLinks.map((link, index) => (
                                    <li key={index} className="text-3xl sm:text-5xl font-bold hover:translate-x-4 transition-all delay-75">
                                        <Link to={link.path} onClick={onClose}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                                {languages.map((lang, index) => (
                                    <button key={index} className="px-3 py-1 sm:px-4 sm:py-2 bg-[#061E2C] text-white text-sm sm:text-base rounded-full border border-[#1DE2CF26]">
                                        <img src={lang.flag} alt={lang.name} className="inline-block mr-2 h-3 sm:h-4" />
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-white w-full lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                                {categories.map((category, index) => (
                                    <div key={index}>
                                        <h3 className="text-2xl sm:text-xl font-semibold mb-3 sm:mb-4">{category.title}</h3>
                                        <ul className="space-y-1 sm:space-y-2">
                                            {category.items.map((item, idx) => (
                                                <li key={idx} className="text-sm sm:text-base cursor-pointer flex items-center">
                                                    <img src={category.icon} alt="tick" className="mr-2 w-4 h-4" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Menu;
