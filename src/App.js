// import { GoArrowUpRight } from "react-icons/go";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { BiWifi0 } from "react-icons/bi";
import Kidato from './utils/Kidato.png';
import Gapstack from './utils/Gapstack.png';
import Solgates from './utils/Solgates.png';
import Group10 from './utils/Group 10.png';
import Frame from './utils/Frame.png';
import firstImage from './utils/firstImage.png';
import Group2 from './utils/Group2.png';
import Group3 from './utils/Group3.png';
function App() {
    return(
        <div className="ml-[20rem] mr-[10rem] items-center justify-center mx-auto">
            <div className="mt-[50px] flex justify-between">
                <p className="ml-[50px] py-2 font-[900] leading-[16px] text-[18px] w-[116px] text-center"><span className="text-orange-600">George</span><span className="text-gray-800">Ralak</span></p>
                {/* <div className="w-[130px] flex leading-[16px] text-center text-orange-600">
                    <p className="">Let'swork together</p>
                    <GoArrowUpRight className="" />
                </div> */}
            </div>
            <div className="w-[435px] mt-[40px] h-[94px] ml-[50px] font-[900] leading-[28px] text-[24px] tracking-wide">
                <p>We Think. <span className="text-orange-600">I Design.</span> They Develop.</p>
                <p><span className="text-orange-600">I Test.</span> We Launch.</p>
                <p className="text-gray-500">Repeat</p>
            </div>
            <div className="flex w-[885px] ml-[50px]">
                <div className=" mt-[40px] flex">
                    <img src={Kidato} alt="kidato" className="w-[135px] h-[70px]"/>
                    <div>
                        <p className="satoshi w-[135px] text-[14px] leading-[20px] h-[40px] text-gray-800 pl-2">Designing Kidato's Parents Mobile App</p>
                        <div className="text-orange-600 flex pl-2">
                            <p className="satoshi">Kidato</p>
                            <BsArrowUpRight className="w-[16px] h-[16px] ml-4 mt-1" />
                        </div>
                    </div>
                </div>
                <div className="ml-[50px] mt-[40px] flex">
                    <img src={Gapstack} alt="kidato" className="w-[135px] h-[70px]"/>
                    <div>
                        <p className="satoshi w-[135px] text-[14px] leading-[20px] h-[40px] text-gray-800 pl-2">Gapstack: Supply chain financing pl...</p>
                        <div className="text-orange-600 flex pl-2">
                            <p className="satoshi">Gapstack</p>
                            <BsArrowUpRight className="w-[16px] h-[16px] ml-4 mt-1" />
                        </div>
                    </div>
                </div>
                <div className="ml-[50px] mt-[40px] flex">
                    <img src={Solgates} alt="kidato" className="w-[135px] h-[70px]"/>
                    <div>
                        <p className="satoshi w-[135px] text-[14px] leading-[20px] h-[40px] text-gray-800 pl-2">Solgates: Building the first fashion e...</p>
                        <div className="text-orange-600 flex pl-2">
                            <p className="satoshi">Solgates</p>
                            <BsArrowUpRight className="w-[16px] h-[16px] ml-4 mt-1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <img src={Group10} alt="group" className="ml-[50px] mt-[40px] w-[885px] h-[310px]"/>
            </div>
            <div>
                <p className="satoshi-bold text-gray-800 w-[84px] h-[16px] ml-[200px] mt-[40px] font-[900] leading-[16px]">About me</p>
                <p className="satoshi w-[360px] h-[32px] ml-[200px] font-[200] leading-[16px] mt-[20px] text-[13px] text-gray-600">I am a product designer working on a mobile, desktop and web apps with a strong focus on usability and simplity.</p>
                <p className="satoshi w-[360px] h-[80px] ml-[200px] font-[200] leading-[16px] text-[13px] mt-[20px] text-gray-600">I have been lucky enough to work with really amazing companies; from helping investors track their investments at <span className="text-orange-600 font-bold">Cytonn</span> to helping people access free WiFi at<span className="text-orange-600 font-bold">BRCK</span>, even connecting blue collar workers to their would-be employers at <span className="text-orange-600 font-bold">LYNK</span>, I have done all that.</p>
                <p className="satoshi w-[360px] h-[80px] ml-[200px] text-[12px] leading-[16px] font-[200] text-gray-800 mt-[20px]">I have worked with organisations outside Kenya helping people pay for their Taxi fare using their mobile wallet at <span className="text-orange-600 font-bold">IMS Global Ventures</span> in South Africa and I'm currently helping bankers and Deal Clearers at <span className="text-orange-600 font-bold">Goldman Sachs</span>(CRG Team - New York) to ensure that new deals brought in are free of conflicts. </p>
            </div>
            <div>
                <p className="satoshi-bold mb-[10px] font-[900] leading-[16px] h-[16px] ml-[200px] mt-[25px] text-[18px]">Selected Projects</p>
                <div className="three ml-[200px] mb-[50px]">
                    <img src={firstImage} alt="select" className="image-1 w-[585px] h-[300px]"></img>
                    <img src={Group2} alt="select" className="image-2 w-[285px] h-[300px]"></img>
                    <img src={Group3} alt="select" className="image-3 w-[285px] h-[300px]"></img>
                </div>
                {/* <img src={Project1} alt="project1"/> */}
                <img className="w-[1330px] ml-[-10.7rem] h-[48px] gap-[30px] mb-[30px]" src={Frame} alt="project2"/>
            </div>
            <div className="mt-[50px]">
                <p className="satoshi flex items-center w-[221px] ml-[200px] h-[16px] gap-[20px] text-orange-600 font-bold mb-8">Full Time <span className="pl-[15px] text-gray-400">Consultancies</span></p>
                <div className="w-[585px]">
                    <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-boold h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-gray-800">Goldman Sachs</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[11px] leading-[16px] text-gray-800">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos</p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>

                     <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-bold h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-orange-500">IMS Global Ventures</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[13px] leading-[16px] text-orange-500">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos<BsArrowRight className="mx-2" size={18} /></p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>
                     <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-bold  h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-gray-800">Andela</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[11px] leading-[16px] text-gray-800">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos</p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>
                     <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-bold  h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-gray-800">BRCK</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[11px] leading-[16px] text-gray-800">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos</p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>
                    <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-bold  h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-gray-800">LYNK</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[11px] leading-[16px] text-gray-800">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos</p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>
                    <div className="w-[585px] flex items-center justify-between mb-8">
                        <p className="satoshi-bold  h-[20px] ml-[200px] font-[700] text-[14px] leading-[20px] text-gray-800">Cytonn Investment</p>
                        <p className="satoshi flex h-[16px] items-center font-[300] text-[11px] leading-[16px] text-gray-800">APR 2017 - JAN 2018<BiWifi0 className="flex items-center mb-1" />10 mos</p>
                    </div>
                    <hr className="ml-[200px] py-4 h-[4px] text-gray-200"/>
                </div>
            </div>
            <div className="bg-gray-50 h-[242px] items-center mx-auto ml-[-4px">
                <p className="satoshi-bold ml-[50px] pt-[20px] mb-[35px]  w-[129px] h-[16px] leading-[16px] text-gray-800 text-[18px] font-bold"> My wall of love</p>
                <div className="flex justify-between mr-[100px]">
                    <div className="py-5">
                    <div className="w-[182px] h-[16px] ml-[50px] text-[13px] flex items-center justify-between mb-2">
                        <p>Jack Ngare</p>
                        <div className="vertical-rule"></div>
                        <p className="text-gray-500">CEO at Gapstack</p>
                    </div>
                    <div className="ml-[50px] w-[285px] h-[80px] text-[13px] leading-[16px] text-gray-800 font-[300]">
                        <p className="satoshi mb-8">I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity. I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity.</p>
                    </div>
                </div>
                <div className="py-5">
                    <div className="w-[222px] h-[16px] ml-[50px] text-[13px] flex items-center justify-between mb-2">
                        <p>Sam Gichuru</p>
                        <div className="vertical-rule"></div>
                        <p className="text-gray-500">CEO & Founder, Kidato</p>
                    </div>
                    <div className="ml-[50px] w-[285px] h-[80px] text-[13px] leading-[16px] text-gray-800 font-[300]">
                        <p className="satoshi mb-8">I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity. I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity.</p>
                    </div>
                </div>
                <div className="py-5">
                    <div className="w-[182px] h-[16px] ml-[50px] text-[13px] flex items-center justify-between mb-2">
                        <p>Jack Ngare</p>
                        <div className="vertical-rule"></div>
                        <p className="text-gray-500">CEO at Gapstack</p>
                    </div>
                    <div className="ml-[50px] w-[285px] h-[80px] text-[13px] leading-[16px] text-gray-800 font-[300]">
                        <p className="satoshi mb-8">I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity. I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity.</p>
                    </div>
                </div>
                <div className="py-5">
                    <div className="w-[222px] h-[16px] ml-[50px] text-[13px] flex items-center justify-between mb-2">
                        <p>Sam Gichuru</p>
                        <div className="vertical-rule"></div>
                        <p className="text-gray-500">CEO & Founder, Kidato</p>
                    </div>
                    <div className="ml-[50px] w-[285px] h-[80px] text-[13px] leading-[16px] text-gray-800 font-[300]">
                        <p className="satoshi mb-8">I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity. I'm a Product Designer working on mobile, desktop, and web apps with a strong focus on usability and simplicity.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-between mb-[20px] mt-[20px] w-[885px]">
                <div className="w-[448px] h-[16px] gap-[5px] text-[13px] flex items-center ml-[50px] font-[300]">
                    <p>+25416 909 815</p>
                    <div className="vertical-rule-2" />
                    <p>georgeralak@gmail.com</p>
                    <div className="vertical-rule-2" />
                    <p>LinkedIn</p>
                    <div className="vertical-rule-2" />
                    <p>Behance</p>
                    <div className="vertical-rule-2"/>
                    <p>Dribbble</p>
                </div>
                <div className="w-[183px] h-[16px] text-[13px] leading-[16px] font-[300]">
                    <p className="satoshi text-gray-800">Developed by:<span className="text-orange-600 text-underline">William Kamuyu</span></p>
                </div>
            </div>
        </div>
    );
}

export default App;