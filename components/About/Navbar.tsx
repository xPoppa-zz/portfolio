import { Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
	return (
		<Flex as="header" bg="transparent" w="877px">
			<HStack h="16" align="center" justify={"center"}>
				<Image
					alt="oops no image"
					src="Me.svg"
					w="65px"
					h="65px"
					borderRadius={"500px"}
				></Image>
				<NextLink href="/" passHref>
					<Button
						as="a"
						aria-label="about"
						variant={"ghost"}
						fontSize="16px"
						fontWeight={100}
					>
						About
					</Button>
				</NextLink>
				<NextLink href="/opensource" passHref>
					<Button
						as="a"
						aria-label="opensource"
						variant={"ghost"}
						fontSize="16px"
						fontWeight={100}
					>
						Open Source
					</Button>
				</NextLink>
				<NextLink href="/projects" passHref>
					<Button
						as="a"
						aria-label="projects"
						variant={"ghost"}
						fontSize="16px"
						fontWeight={100}
					>
						Projects
					</Button>
				</NextLink>
			</HStack>
			<Spacer />
			<Button borderRadius={"500px"}>
				<MdDarkMode />
			</Button>
		</Flex>
	);
};

export default Navbar;
