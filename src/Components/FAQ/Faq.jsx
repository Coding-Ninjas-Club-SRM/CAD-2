import React,{useState} from 'react'
import Accordion from './Accordion'
const Faq = () => {

const [open,setOpen] = useState(false);

const toggle = (index) => {
    if (open === index){
        return setOpen(null)
    }
    setOpen(index)
}

const faqdata = [
    {
        title : "Demo title 1",
        desc : "Demo Desc 1"
    },
    {
        title : "Demo title 2",
        desc : "Demo Desc 2"
    },
    {
        title : "Demo title 3",
        desc : "Demo Desc 3"
    },
    {
        title : "Demo title 4",
        desc : "Demo Desc 4"
    },
]


  return (
    <div className="bg-black text-[#FF0000] flex h-screen justify-center items-center">
        <div className='px-4 w-full'>
            {faqdata.map((data , index) => {
                return <Accordion key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} />
            })}
        </div>
    </div>
  )
}

export default Faq
