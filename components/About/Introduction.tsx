import { Heading, Text, VStack } from "@chakra-ui/react";

const Introduction = () => {
	return (
		// const breakpoints = {
		// 	sm: "320px",
		// 	md: "480px",
		// 	lg: "600px",
		// 	xl: "880px",
		// };
		<VStack align="start" w={{ base: "70vw", lg: "700px" }}>
			<Heading>{"Hi, I'm Romano"}</Heading>
			<Text>
				I am a Front end Developer, an blockchain enthousiast and a tutor from
				the Netherlands
			</Text>
			<Text>
				This is my portfolio, where I show the things I am working on and share
				my findings.
			</Text>
		</VStack>
	);
};

export default Introduction;
