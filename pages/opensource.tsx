import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import HeroContainerOpenSource from "../components/OpenSource/HeroContainerOpenSource";

const OpenSource: NextPage = () => {
	return (
		<Flex>
			<HeroContainerOpenSource />
		</Flex>
	);
};

export default OpenSource;
