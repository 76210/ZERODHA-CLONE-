import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>     
       <h1 className='fs-2 text-center '>We pioneered the discount broking model in India. <br></br> Now, we are breaking
         ground with our technology.</h1>
            </div> 
        <div className='row p-5 mt-5 border-top fs-6' style={{lineHeight: "1.8", fontsize: "1.2rem" }}>    
         <div className='col-6 p-5'> 
        <p className='text-muted'>We kick-started operation on the 15th of Agust, 2010 <br></br> with the goal of breaking all barrier that traders and <br></br> invertors face in India in terms of cost, support , and <br></br> technolog, We named the company Zerodha, a <br></br> combination of zero and "Rodha", the Sanskrit word for <br></br> barrier.</p>

        <p className='text-muted'>Today, our disruptive pricing models and in-house <br></br> technology have made us the biggest stock broker in <br></br> India.</p> 

        <p className='text-muted'>Over 1+ Crore clients place millions of orders every day <br></br> through our powerful ecosystem of investment <br></br> platforms, contributing over 15% of all India retail <br></br>  trading volumes. </p>
         </div> 

          <div className='col-6 p-5'>
            <p className='text-muted'>In addition, we run a number of popular open online <br></br> educational and community initiatives to empower retail <br></br> traders and investors.</p>
            <p className='text-muted'><a href=" " style={{textDecoration: "none"}}>Rainmatter</a>, our  fintech fund and incubator , has invested <br></br> in several fintech startup with the goal of growing the <br></br> india capital markets.</p>

            <p className='text-muted'>And yet, we are always up to something new every day. <br></br> Catch up on the latest updates on our blog or see what  <br></br> the media is saying about us.</p>
          </div>
        </div>
        </div>
     );
}

export default Hero;