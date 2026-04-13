import React from 'react';

function Awards() { 
    return ( 
        <div className='container'> 
          
              <div className='row p-5'>
            <div className='col-6'>
               <img src='media/images/largestBroker.svg' style={{width:"70%"}}/> 
               <div className='text-center'>
                <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                
                <a href=''style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
               </div>
                </div> 
              
              <div className='col-6 p-5'>  
                    <h1 className='fs-2 mb-3'>Largest stock broker in India</h1>
                    
                    <p className='text-muted'>
                  2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and aainvesting in:
                    </p>
                    <div className='row p-5'>
                        <div className='col-6'>  
                            
                               <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li> 
                               </ul>
                                </div>
                                <div className='col-6'> 
                             <ul>
                                <li>Stocks & IPQs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds ar</li>  
                               </ul>
                             </div>
                    </div>
                   
                </div>
                </div>
           </div>   
       
     );
}

export default Awards;