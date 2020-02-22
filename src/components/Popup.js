  
import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">
                    <b>IMDb Rating:  </b> {selected.imdbRating} <br /> 
                    <b>Genre:  </b> {selected.Genre} <br /> 
                    <b>Director:  </b> {selected.Director}
                    </p>
               
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p> 
                    
                    <p><b>Actors:  </b> {selected.Actors}</p>
                    

				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup