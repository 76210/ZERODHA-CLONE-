import React from 'react';

function Brokerage() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 text-center border-top'>
            <div className='col-8 p-4'>
               <a href=''  className='fs-5' style={{textDecoration: "none"}}>Brokerage calculator</a> 
                <ul className='text-muted' style={{textAlign: "left", lineHeight: "2.5", fontSize: "14px"}}> 
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of &#8377; 50 + GST per order.</li>
                    <li>Digital contract notes will be sent via-email</li>
                    <li>Physical copies of constract notes, if required, shall be changed &#8377;20 per contract note. Courier charges apply.</li>
                    <li>For NRI account(non-PIS) , 0.5% or &#8377; 100 per excuted oreder for equity(whichever is lower) .</li>
                    <li>For NRI account (PIS), 0.5% or &#8377; 200 per excuted oreder for equity(whichever is lower) . </li>
                    <li>If the account is in debit balance , any order placed will be charged &#8377;40 per excuted order instead &#8377; 20 per executed order.</li>    
                </ul>
            </div>
            <div className='col-4 p-4'>
                  <a href=''  className='fs-5' style={{textDecoration: "none"}}>List of charges</a> 
            </div>
        </div>
       </div>
     );
}
export default Brokerage;