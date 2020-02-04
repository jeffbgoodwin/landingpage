import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Card2 } from "./card2";
import { Jumbo } from "./jumbo";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<Jumbo />

			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<div className="d-flex justify-content-around">
					<Card />
					<Card2 />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
}
