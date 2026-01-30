
import React from 'react';
import { AdaloveGraphicIcon, ChevronDownIcon, LocationMarkerIcon, BuildingIcon, BellIcon } from './Icons';
import logo from "./image.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
                {/* <span className="text-2xl font-medium text-adalove-deep-purple tracking-wider">Adalove</span> */}
                <div className="text-adalove-pink self-start pt-1">
                    {/* <AdaloveGraphicIcon className="h-5 w-6" /> */}
                    <img src={logo}></img>
                </div>
            </div>
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-adalove-deep-purple hover:text-adalove-pink px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                  Principal 
                  <ChevronDownIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
              <LocationMarkerIcon className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
              <BuildingIcon className="h-6 w-6" />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-adalove-red flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="text-adalove-deep-purple font-medium text-sm">Vito</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;