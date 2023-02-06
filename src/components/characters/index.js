import React from 'react'

export const Characters= ({characters = []}) => {
  return (
    <div className='row'>

<div id="carouselControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    {characters.map((item, index)=>(
              <div className='col-md-4'>
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth:"200px"}}>
                    <img src={item.image} alt=""/>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                       < hr/>
                       <p>
                        especies: {item.species}
                       </p>
                       <p>
                        ubicacion: {item.location.name}
                       </p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

       
        
            
        </div>
    
  )
}
