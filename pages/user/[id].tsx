import { useRouter} from "next/router";
import {Alert, Text, SimpleGrid, Flex, Heading, Link} from "@chakra-ui/core";
import useSWR from "swr";
import React from "react";
import NextLink from "next/link";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if(!res.ok){
        throw Error("Issue fetching url");
    }
    const data: {
        id: string,
        first_name: string;
        last_name: string;
        email: string;
    } = await res.json();
    return data;
};

const UserData = () => {
   const router = useRouter();
   const {id} = router.query;
   const { data, error } = useSWR(`/api/users/${id}`, fetcher);

   if(error){
       return <Flex flexDirection="column" alignItems="center" margin={4}>
       <Alert status='error'>Loading failed: {error.message}</Alert>
       </Flex>
   }

   if(!data){
       return <Flex flexDirection="column" alignItems="center" margin={4}>
           <Alert status='info'> Loading ...</Alert>
       </Flex>
   }
    return (

        <Flex flexDirection="column" alignItems="center" margin={4}>
            <Heading as="h1" size="2xl" margin="2rem"> User: {data.first_name}</Heading>
        <SimpleGrid columns={2}  width="2xs" spacingY={4}>
            <Text fontWeight="bold" marginRight={40}>
                UserID
            </Text>
            <Text>{data.id}</Text>

            <Text fontWeight="bold" marginRight={4}>
                First Name
             </Text>
            <Text>
                {data.first_name}
            </Text>

            <Text fontWeight="bold" marginRight={4}>
                Last Name
            </Text>
            <Text>
                {data.last_name}
            </Text>

            <Text fontWeight="bold" marginRight={4}>
                Email
            </Text>
            <Text>
                {data.email}
            </Text>

        </SimpleGrid>
            <NextLink href="/" passHref>
                <Link>
                    Go back home
                </Link>
            </NextLink>
        </Flex>
    );
};
export default UserData;
/*
const EditUser = () => {
    const router  = useRouter();
    const { id, ...rest} = router.query;

    return (
      <>
          <h2> User Edit Id ={id}</h2>
          <pre> {JSON.stringify(rest)}</pre>
      </>

    );
};


export default EditUser;
*/
