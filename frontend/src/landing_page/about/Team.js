import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5 border-top'>      
       <h1 className='text-center '>People</h1> 
      
            </div> 
        <div className='row p-5  fs-6' style={{lineHeight: "1.8", fontsize: "1.2rem" }}>    
         <div className='col-6 p-5 text-center'>  

       <img src='media/images/nithinKamath.jpg' 
         style={{ borderRadius: "100%", width: "60%"}} 
       /> 
        <h4 className='mt-5 text-muted' >Nithin Kamath</h4>
       <h5 className='text-muted'>Founder , CEO</h5> 
         </div> 

          <div className='col-6 p-5'>
            <p className='text-muted'>Nithin bootstraped and founded Zerodha in 2010 to overcome the <br></br> hurdles he faced during his decade long stint as a trader. Today, <br></br> Zerodha has changed the landscape of the India broking industry. </p>

            <p className='text-muted'> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and <br></br> the Market Data Advisory Committee (MDAC).</p>


            <p className='text-muted'> Playing basketball is his zen. </p>
            <p className='text-muted'>Connect on <a href=" " style={{textDecoration: "none"}}>Homepage</a>  <a href=" " style={{textDecoration: "none"}}>/ TradingQnA</a>  <a href=" " style={{textDecoration: "none"}}>/ Twitter</a>  </p>

          </div> 
        </div>
        </div>
     );
}

export default Team;