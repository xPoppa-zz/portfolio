import { Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import OpenSourceCard from "./OpenSourceCard";
import data from "../../Data/openSourceData";

const OpenSource = () => {
	const repoCards = data.map((data, idx) => {
		return (
			<OpenSourceCard
				key={idx + 20}
				title={data.title}
				repoName={data.repoName}
				description={data.description}
				techStack={data.techStack}
				website={data.website}
			/>
		);
	});

	return (
		<VStack align="start" spacing="30px">
			<Heading>Open Source</Heading>
			<Text>
				This Page lists some of the opensource repositories I have published or
				contributed to
			</Text>
			{repoCards}
		</VStack>
	);
};

export default OpenSource;
