import React from 'react';

function Hero() {
    return ( 
       <div className='container '> 
        <div className='row p-5 mt-5 border-bottom' > 
            <h1 className='text-center'>Pricing</h1>    
            <p className='text-center'>Free equity investments and flat &#8377;20 traday and F&O trades</p>
          <div className='row p-5 mt05 text-center'>
        <div className='col-4 p-4'> 
            < img src='media/images/pricing0.svg' alt="pricing" />   
            <h2 className='fs-3'>Free equity delivery</h2> 
            <p className='text-muted'>All equity delivery investment (NSE, BSE), <br></br>are absolutly free - &#8377;0 brokerage<br></br></p>
        </div>
         <div className='col-4 p-4'> 
             < img src='media/images/intradayTrades.svg' alt="intraday" />
             <h2 className='fs-3'>Intraday and F&O trades</h2>
             <p className='text-muted'>Flat Rs. 20 or o.o3% (whichever is lower) <br></br> per executed order on intraday trades <br></br> across equity currency, and commodity <br></br> trades.</p>

         </div>
         <div className='col-4 p-4'>
             < img src='media/images/pricing0.svg' alt="pricing"/> 
             <h2 className='fs-3'>Free direct MF</h2> 
             <p className='text-muted'>All direct mutual fund <br></br> absolutely free</p> 
         </div>
          </div>
        </div>
        </div>
     );
} 
export default Hero;