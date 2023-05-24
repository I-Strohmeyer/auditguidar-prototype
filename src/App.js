import "./App.css";

import { Button, Heading, Text } from "@chakra-ui/react";

function App() {
	return (
		<div className="App">
			<Heading color="white" mb={8}>
				Audit
				<Text as="span" color="brand.800">
					Guidar
				</Text>
			</Heading>
			<Text color="white" mb={4}>
				Checks if anyone is in the office.
			</Text>
			<Button bg="brand.900" _hover={{ backgroundColor: "#E78417" }}>
				Get office status
			</Button>
		</div>
	);
}

export default App;
