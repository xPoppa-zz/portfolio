import { VStack } from "@chakra-ui/react";
import Career from "./Career";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Skills from "./Skills";

const HeroContainerAbout = () => {
	return (
		<VStack justify={"center"} spacing="50px">
			<Navbar />
			<Introduction />
			<Skills />
			<Career />
		</VStack>
	);
};

export default HeroContainerAbout;
