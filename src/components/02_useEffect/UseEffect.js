import React, { useState, useEffect } from "react"; // Import the "useState" & "useEffect" hook function from the React object.

const UseEffect = () => {
	// Define the state variable (resource) and the default state modifier function (setResource)
	const [resource, setResource] = useState("users"); // The default state value of ${resource} is set to "users' using the "useState()" hook function.

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resource}`)
			.then((response) => response.json())
			.then((json) => console.log(json));
		console.log("Component rendered!");
	}, [resource]);

	return (
		<div>
			<button onClick={() => setResource("users")}>USERS</button>
			<button onClick={() => setResource("posts")}>POSTS</button>
			<button onClick={() => setResource("comments")}>COMMENTS</button>
			<h1>{resource}</h1>
		</div>
	);
};

export default UseEffect;
