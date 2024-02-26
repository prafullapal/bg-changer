import { useState } from "react";

function App() {
	const [color, setColor] = useState("olive");
	return (
		<>
			<div
				className="w-screen h-screen duration-100"
				style={{ backgroundColor: `${color}` }}
			>
				<div className="fixed flex justify-center bottom-12 inset-x-0">
					<div className="bg-white flex m-2 rounded-full w-fit">
						<button
							onClick={() => setColor("red")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "red" }}
						>
							Red
						</button>
						<button
							onClick={() => setColor("green")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "green" }}
						>
							Green
						</button>
						<button
							onClick={() => setColor("blue")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "blue" }}
						>
							Blue
						</button>
						<button
							onClick={() => setColor("violet")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "violet" }}
						>
							Violet
						</button>
						<button
							onClick={() => setColor("purple")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "purple" }}
						>
							Purple
						</button>
						<button
							onClick={() => setColor("brown")}
							className="text-white m-2 rounded-full"
							style={{ backgroundColor: "brown" }}
						>
							Brown
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
