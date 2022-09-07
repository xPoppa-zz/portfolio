import { VStack } from "@chakra-ui/react";
import Navbar from "../shared/Navbar";
import OpenSource from "./OpenSource";

const HeroContainerOpenSource = () => {
	return (
		<VStack justify={"center"} spacing="3em">
			<Navbar />
			<OpenSource />
		</VStack>
	);
};

export default HeroContainerOpenSource;
