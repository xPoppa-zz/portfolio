import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import HeroContainerAbout from "../components/About/HeroContainerAbout";

const About: NextPage = () => {
	return (
		<Flex>
			<HeroContainerAbout />
		</Flex>
	);
};

export default About;
