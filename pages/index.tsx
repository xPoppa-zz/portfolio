import { Button, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import HeroContainerAbout from "../components/About/HeroContainerAbout";

const Home: NextPage = () => {
	return (
		<Flex>
			<HeroContainerAbout />
		</Flex>
	);
};

export default Home;
