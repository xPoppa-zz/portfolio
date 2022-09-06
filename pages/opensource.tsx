import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import HeroContainerOpenSource from "../components/OpenSource/HeroContainerOpenSource";

const OpenSource: NextPage = () => {
	return (
		<Flex justify="center">
			<HeroContainerOpenSource />
		</Flex>
	);
};

export default OpenSource;
