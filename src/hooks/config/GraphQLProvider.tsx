import { ApolloProvider } from '@apollo/client';
import React, { ReactNode } from 'react';
import { graphqlClient } from '~/apis/gql';

export const GraphQLProvider = (props: { children: ReactNode }) => (
  <ApolloProvider client={graphqlClient}>{props.children}</ApolloProvider>
);
