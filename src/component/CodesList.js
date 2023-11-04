import React from 'react'
import QRCode from 'react-qr-code'

const CodesList = ({link, name}) => {
  return (
    <ul>
      <li>
       <QRCode
          size={256}
          style={{ height: "100px", maxWidth: "80%", width: "80%" }}
          value={link}
          viewBox={`0 0 256 256`}
         ></QRCode>
         <h4>{name}</h4>
      </li>
    </ul>
  )
}

export default CodesList