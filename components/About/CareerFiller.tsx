import NextLink from "next/link";
import { HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

const CareerFiller = () => {
	return (
		<HStack
			align="start"
			justify={"center"}
			w={{ base: "70vw", lg: "700px" }}
			_hover={{ boxShadow: "base", rounded: "md" }}
		>
			<Image
				src={"Me.svg"}
				alt="oops no image"
				w="65px"
				h="65px"
				borderRadius={"500px"}
			/>
			<VStack align="start" pt="1em">
				<Text fontSize="16px">
					If you want to see my recent OpenSource projects click{" "}
					<NextLink href="/opensource" passHref>
						<Text as="a" fontWeight={"bold"}>
							here
						</Text>
					</NextLink>
				</Text>
			</VStack>
			<Spacer />
		</HStack>
	);
};

export default CareerFiller;
