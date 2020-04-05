import {ThemeProvider, CSSReset} from "@chakra-ui/core/dist";
import {AppProps} from "next/app";

const App = ({Component, pageProps}: AppProps) => {
    return(
        <ThemeProvider>
            <CSSReset/>
           <Component {...pageProps}/>
        </ThemeProvider>
    )

};

export default App;
