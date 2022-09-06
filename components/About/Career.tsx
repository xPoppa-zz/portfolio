import { Heading, VStack } from "@chakra-ui/react";
import CareerCard from "./CareerCard";

const Career = () => {
	return (
		<VStack w="50vw" align="start" mt="50px">
			<Heading mb="20px">Career</Heading>
			<CareerCard />
		</VStack>
	);
};

export default Career;
