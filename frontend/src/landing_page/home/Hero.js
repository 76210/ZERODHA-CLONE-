import React from 'react';

function Hero () {
    return ( 
        <div className='container'>
            <div>
               <img src='media/images/homeHero.png' style={{width:"90%"}}/> 

            </div>
            <div className='' style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}> 
                <h1>Invest in everything</h1> 
                <p>Online platform to invest in stocks, derivates, mutual funds, and more</p> 
                <button className='btn btn-primary btn-lg'  >Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;  
 
