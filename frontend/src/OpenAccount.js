import React from 'react';

function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5'> 
           
            <div className='' style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}> 
                <h1>Open a Zerodha account</h1>  
                <p>Modern platforms and apps,&#8377; 0 investments , and flat &#8377; 20 intraday and F&O trades.</p> 
                <button className='btn btn-primary btn-lg'  >Sign up Now</button>
            </div> 
        </div>
      );
}

export default OpenAccount;