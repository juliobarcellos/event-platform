import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxsc4j1ei401xkc7fzb0g1/master',
    cache: new InMemoryCache()
})