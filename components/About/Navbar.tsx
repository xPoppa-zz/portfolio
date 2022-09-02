import { Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
	return (
		<Flex as="header" bg="transparent" w="100vw">
			<HStack h="16" align="center" justify={"center"} pl="30vw">
				<Image alt="oops no image" src=""></Image>
				<NextLink href="/" passHref>
					<Button as="a" aria-label="about" variant={"ghost"}>
						About
					</Button>
				</NextLink>
				<NextLink href="/opensource" passHref>
					<Button as="a" aria-label="opensource" variant={"ghost"}>
						Open Source
					</Button>
				</NextLink>
				<NextLink href="/projects" passHref>
					<Button as="a" aria-label="projects" variant={"ghost"}>
						Projects
					</Button>
				</NextLink>
			</HStack>
			<Spacer />
			<Button>Dark mode</Button>
		</Flex>
	);
};

export default Navbar;
