import React from "react";

export function Card() {
	return (
		<div className="card mx-3" style={{ width: "18rem;" }}>
			<img
				src="https://source.unsplash.com/random/300x250"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				{}
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-info">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
