import { useQuery, gql } from '@apollo/client';

type User = {
  id: number;
  name: string;
  email: string;
};

const FETCH_USER_LIST = gql`
  query fetchUserList($name: String) {
    fetchUserList(user: { name: $name }) {
      id
      name
      email
    }
  }
`;

export const useUserList = () => {
  const { loading, data } = useQuery<{ fetchUserList: User[] }, {}>(
    FETCH_USER_LIST
  );

  console.log(loading, data);

  return { loading, data };
};
