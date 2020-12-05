import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	return (
		<>
			<div className="lightstick mx-auto"> </div>
			<div className="trafficlight mx-auto d-flex align-items-center flex-wrap">
				<div
					className={
						color === "red"
							? "red light mx-auto bottomspace selected"
							: "red light mx-auto bottomspace"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow light mx-auto bottomspace selected"
							: "yellow light mx-auto bottomspace"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green"
							? "green light mx-auto bottomspace selected"
							: "green light mx-auto bottomspace"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</>
	);
}
