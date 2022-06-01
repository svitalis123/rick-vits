import './App.css';

function App() {
  return (
    <div className="App">
      <img className='imgs' src="/images/bg-pattern-top-desktop.svg" alt="topbackground" />
      <img  className='imgs1' src="/images/bg-pattern-bottom-desktop.svg" alt="backgroundbottom" />
      <div className='container' >
        <div className='section'>
        <div className='uppersection'>
          <div className='uppersectionleft'>
            <h1> 10,000+ of our users love our products.</h1>
            <p>We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.</p>
          </div>

          <div className='uppersectionright'>
            <p><span>⭐⭐⭐⭐⭐</span>Rated 5 stars in review</p>
            <p><span>⭐⭐⭐⭐⭐</span>Rated 5 Stars in Report Guru</p>
            <p><span>⭐⭐⭐⭐⭐</span> Rated 5 Stars in BestTech</p>
            
          </div>

          </div>

        </div>

        <div className='section'>

        <div className='lowersection'>
          <div className='lowersectionleft' >
            <div className='imagediv'>  
              <img src='images/image-colton.jpg' alt="colton" ></img>    
              <div className='namediv'>
                <span>  Colton Smith </span>
                <span>Verified Buyer</span>              
              </div>
            </div>
            <p>  
               "Put an order with this company and can only praise them for the very high
               standard. Will definitely use them again and recommend them to everyone!"
            </p>           
          </div>

          <div className='lowersectionmiddle'>
            <div className='imagediv'>  
              <img src='images/image-anne.jpg' alt="anne"></img>
         
             <div className='namediv'>
               <span> Anne Wallace</span>
               <span>Verified Buyer</span>    
              </div>
            </div>
            <p>  
              "We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                  Excellent!"
            </p>
          </div>

          <div className='lowersectionright'>
            <div className='imagediv'>  
              <img src='images/image-irene.jpg' alt="irene"></img>
          
             <div className='namediv'>
               <span>  Irene Roberts  </span>
               <span>Verified Buyer</span> 
             </div>

             </div>
            <p>
            "Customer service is always excellent and very quick turn around. Completely
              delighted with the simplicity of the purchase and the speed of delivery."

            </p>

          </div>
         

        </div>



      </div>
        
        
      </div>

     </div> 
 
  );
}

export default App;
