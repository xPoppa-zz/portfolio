import { Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

interface Props {}

const CareerCard = (props: Props) => {
	return (
		<VStack>
			<HStack>
				<Image src="" alt="oops no image" />
				<VStack>
					<Heading>{props}</Heading>
					<Text></Text>
					<Text>Icons</Text>
				</VStack>
				<Spacer />
				<Text>props</Text>
			</HStack>
		</VStack>
	);
};

export default CareerCard;
