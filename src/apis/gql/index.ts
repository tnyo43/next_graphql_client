import { GraphQLClient } from 'graphql-request';
import { getSdk } from '~/libs/generated/client';

const graphqlClient = new GraphQLClient('http://localhost:3000/graphql');
export const sdk = getSdk(graphqlClient);
