import { useEffect, useState } from 'react';
import { sdk } from '~/apis/gql';
import { User } from '~/libs/generated/client';

export const useUserList = () => {
  const [result, setResult] = useState<User[]>();

  useEffect(() => {
    const fetch = async () => {
      const response = await sdk.fetchUserList({});
      setResult(response.fetchUserList);
    };
    fetch();
  }, []);

  return { loading: result === undefined, data: result };
};
