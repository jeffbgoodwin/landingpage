import React from "react";

export function Jumbo() {
	return (
		<div className="jumbotron mt-5 mx-5">
			<h1 className="display-4">Hello, WORLD!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-info btn-lg-outline" href="#" role="button">
				Learn mas
			</a>
		</div>
	);
}
