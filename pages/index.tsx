import {NextPage} from "next";
import NextLink from "next/link";
import {Flex, Heading, Link} from "@chakra-ui/core/dist";

const IndexPage: NextPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center" margin={4}>
           <Heading as="h1" size="2xl" margin="2rem"> Hello World Milah</Heading>

                <NextLink href="/about"><Link>Go to About Page</Link></NextLink>


                <NextLink href="/user"><Link>Go to User Page</Link></NextLink>


        </Flex>
    );
};

export default IndexPage;
