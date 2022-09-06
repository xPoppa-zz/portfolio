import { VStack } from "@chakra-ui/react";
import Navbar from "../About/Navbar";
import OpenSource from "./OpenSource";

const HeroContainerOpenSource = () => {
	return (
		<VStack justify={"center"} spacing="50px">
			<Navbar />
			<OpenSource />
		</VStack>
	);
};

export default HeroContainerOpenSource;
