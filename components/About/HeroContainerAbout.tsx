import { VStack } from "@chakra-ui/react";
import Career from "./Career";
import Introduction from "./Introduction";
import Navbar from "../shared/Navbar";
import Skills from "./Skills";
import CareerFiller from "./CareerFiller";

const HeroContainerAbout = () => {
	return (
		<VStack justify={"center"} align={"center"} spacing="3em">
			<Navbar />
			<Introduction />
			<Skills />
			<CareerFiller />
		</VStack>
	);
};

export default HeroContainerAbout;
