import { useState } from "react";
import "./App.css";

import { Button, Text, Spinner, Box, Center } from "@chakra-ui/react";
import { ReactComponent as YourSVG } from "./assets/logfig.svg";

function App() {
	const [loading, setLoading] = useState(false);
	const [randomData, setRandomData] = useState({ text: "", emoji: "" });
	//const [refresh, setRefresh] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setRandomData({ text: "", emoji: "" });

		//Fake an API call with loading spinner
		setTimeout(() => {
			const data = [
				{ text: "At least one person detected!", emoji: "👀" },
				{ text: "Nothing detected", emoji: "🙈" },
			];
			const randomIndex = Math.floor(Math.random() * data.length);
			setRandomData(data[randomIndex]);
			setLoading(false);
		}, 2000);
	};

	return (
		<div className="App">
			<Box maxW="400px" h="200px">
				<YourSVG
					style={{ maxWidth: "400px", maxHeight: "80px" }}
					alt="logo 2"
				/>
			</Box>
			<Text color="white" mb={4} fontSize="24px">
				Is someone in the DPS office?
			</Text>
			<Box
				maxW="md"
				bg="black"
				boxShadow="rgba(255, 255, 255, 0.16) 0px 2px 20px"
				p={16}
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Button
					bg="brand.900"
					mb={12}
					_hover={{ backgroundColor: "#E78417" }}
					onClick={handleClick}
					isLoading={loading}
				>
					Get status
					{loading ? <Spinner size="sm" /> : null}
				</Button>
				<Text color="white">
					{randomData.text && (
						<>
							<Center>
								<Text
									fontSize="32px"
									role="img"
									aria-label="Emoji"
									mb={2}
								>
									{randomData.emoji}
								</Text>
							</Center>
							<Text as="span">{randomData.text}</Text>
						</>
					)}
				</Text>
			</Box>
		</div>
	);
}

export default App;
