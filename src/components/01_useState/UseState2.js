import React, { useState } from "react"; // Import the "useState" hook function from the React object.

const UseState = () => {
	// Define the state variable (count) and the default state modifier function (setCount)
	const [count, setCount] = useState(() => {
		console.log("Component rendered.");
		return 0;
	}); // The default value of ${count} is set to 0 using the "useState()" hook function.

	const decreaseCount = () => {
		setCount((prevCount) => prevCount - 1); // Use the "setCount" state modifier function to modify the previous state (count) value.
	};

	const increaseCount = () => {
		setCount((prevCount) => prevCount + 1); // Use the "setCount" state modifier function to modify the previous state (count) value.
	};
	return (
		<div>
			<h1>UseState</h1>
			<button onClick={decreaseCount}>Decrease Count</button>
			<p>Count's state value: {count}</p>
			<button onClick={increaseCount}>Increase Count</button>
		</div>
	);
};

export default UseState;
