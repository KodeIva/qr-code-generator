import React from 'react'
import QRCode from 'react-qr-code'

const CodesList = ({link, name}) => {
  return (
    <ul className='mt-10 bg-yellow-300 '>
      <li className='flex flex-col justify-center items-center bg-green-300 w-[190px] h-[180px] m-2'>
       <QRCode
          size={256}
          style={{ height: "100px", margin: '2px',padding:'1px', maxWidth: "100%", width: "100%" }}
          value={link}
          viewBox={`0 0 256 256`}
         ></QRCode>
         <h4 className='text-lg font-medium mt-3 font-mono'>{name}</h4>
      </li>
    </ul>
  )
}

export default CodesList