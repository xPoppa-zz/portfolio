import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
	sm: "30em",
	md: "48em",
	lg: "62em",
	xl: "80em",
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
export default MyApp;
