import { Heading, Text, VStack } from "@chakra-ui/react";
import data from "../../Data/careerData";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
	const ProjectsCards = data.map((project, idx) => {
		return (
			<ProjectCard
				key={idx + 20}
				company={project.company}
				jobTitle={project.jobTitle}
				techStack={project.techStack}
				date={project.date}
			/>
		);
	});

	return (
		<VStack>
			<Heading>Projects</Heading>
			<Text>I have not worked on Projects yet.</Text>
			{ProjectsCards}
		</VStack>
	);
};

export default Projects;
