import { Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

interface Props {
	company: string;
	jobTitle: string;
	techStack: string[];
	date: string;
	picture: string;
}

const CareerCard = (props: Props) => {
	const techStack = props.techStack.map((tech, idx) => {
		return <Text key={idx + 200}>{tech}</Text>;
	});

	return (
		<HStack
			align="start"
			w="700px"
			_hover={{ boxShadow: "base", rounded: "md" }}
			pl="10px"
		>
			<Image
				src={props.picture}
				alt="oops no image"
				w="65px"
				h="65px"
				borderRadius={"500px"}
			/>
			<VStack align="start">
				<Heading fontSize={"20px"}>
					{props.company}
					{/*Props*/}
				</Heading>
				<Text fontSize="16px">
					{props.jobTitle}
					{/*Props*/}
				</Text>
				{techStack}
			</VStack>
			<Spacer />
			<Text>{props.date}</Text>
		</HStack>
	);
};

export default CareerCard;
