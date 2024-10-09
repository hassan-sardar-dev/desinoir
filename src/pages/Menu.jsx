import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import usa from '../assets/usa.svg'
import ksa from '../assets/ksa.svg';

const Menu = ({ isOpen, onClose }) => {
    const navigationLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Articles', path: '/article' },
        { name: 'UI Store', path: '/store' }
    ];
    const languages = [
       { name: 'English',
        flag: usa},
       { name: 'Arabic',
        flag: ksa},
        
    ];

    const categories = [
        {
            title: 'UI/UX Designing',
            items: ['User Research', 'Information Architecture', 'Visual Design', 'Accessibility Testing', 'Design Handoff']
        },
        {
            title: 'Branding',
            items: ['Brand Strategy', 'Brand Design', 'Brand Audits', 'Brand Storytelling', 'Brand Refresh']
        },
        {
            title: 'Graphic Designing',
            items: ['Print Design', 'Packaging Design', 'Illustration', 'Infographic Design', 'Layout and Composition']
        },
        {
            title: 'Motion Graphic Designing',
            items: ['Animation', 'Video Editing', 'Motion Graphics for Social Media', 'Explainer Videos', 'Kinetic Typography']
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
                <nav className="p-8 overflow-y-auto h-full">
                    <div className="flex">
                        <div className="text-left text-[#20D091] w-1/3 pr-8">
                            <h1 className="text-3xl font-bold mb-8">Esinair</h1>

                            <ul className="space-y-6">
                                {navigationLinks.map((link, index) => (
                                    <li key={index} className="text-2xl hover:translate-x-4 transition-all delay-75">
                                        <Link to={link.path} onClick={onClose}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 space-x-4">
                                {languages.map((lang, index) => (
                                    <button key={index} className="px-4 py-2 bg-[#061E2C] text-white rounded-full border border-[#1DE2CF26]">
                                        <img src={lang.flag} alt={lang.name} className="inline-block mr-2 h-4" />
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-white w-2/3">
                            <div className="grid grid-cols-2 gap-12">
                                {categories.map((category, index) => (
                                    <div key={index}>
                                        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                                        <ul className="space-y-2">
                                            {category.items.map((item, idx) => (
                                                <li key={idx} className="hover:text-[#20D091] cursor-pointer">{item}</li>
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
