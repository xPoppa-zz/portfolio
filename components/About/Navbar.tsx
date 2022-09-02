import { Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
	return (
		<Flex as="header" bg="whitesmoke" w="100vw">
			<HStack h="16" align="center" justify={"center"} pl="30vw">
				<Image alt="oops no image" src=""></Image>
				<NextLink href="/" passHref>
					<Button as="a" aria-label="About" variant={"ghost"}>
						About
					</Button>
				</NextLink>
				<NextLink href="/Open-Source" passHref>
					<Button as="a" aria-label="Open-Source" variant={"ghost"}>
						Open Source
					</Button>
				</NextLink>
				<NextLink href="/Projects" passHref>
					<Button as="a" aria-label="Projects" variant={"ghost"}>
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
