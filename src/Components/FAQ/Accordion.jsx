
import React from 'react'
import { Collapse } from 'react-collapse';
import {IoIosArrowDropdown} from "react-icons/io";
import {IoIosArrowDropup} from "react-icons/io";
const Accordion = ({open , toggle , title, desc}) => {
  return (
    <div className='pt-4'>
     <div className='bg-white-off py-3 px-6 flex justify-between items-center cursor-pointer rounded-lg ' onClick={toggle}>
        <p className='text-md font-semibold '>{title}</p>
        <div>
            {open ? <IoIosArrowDropup className='text-black font-xl font-bold'/> : <IoIosArrowDropdown className='text-black font-2xl font-bold'/> }
        </div>
     </div>
     <Collapse isOpened = {open}>
        <div className='bg-[#50C878] px-6 mt-3 pb-3 rounded-lg'>{desc}</div>
     </Collapse>
    </div>
  )
}

export default Accordion
