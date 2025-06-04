// pages/users/index.tsx
import React from 'react';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface Props {
  users: UserProps[];
}

const UsersPage: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
