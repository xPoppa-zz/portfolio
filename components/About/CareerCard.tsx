import { Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

interface Props {}

const CareerCard = (props: Props) => {
	return (
		<HStack
			align="start"
			w="700px"
			_hover={{ boxShadow: "base", rounded: "md" }}
			pl="10px"
		>
			<Image src="" alt="oops no image" />
			<VStack align="start">
				<Heading fontSize={"20px"}>Google</Heading>
				<Text fontSize="16px">Senior Frontend Engineer</Text>
				<Text fontSize="12px" fontWeight={800}>
					Typescript Javascript React Redux
				</Text>
			</VStack>
			<Spacer />
			<Text>2019-Present</Text>
		</HStack>
	);
};

export default CareerCard;
