// pages/users/index.tsx
import React from 'react';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface Props {
  users: UserProps[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // Fetch users from API or use static data
  // Example static data:
  const users: UserProps[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    // Add more users as needed
  ];

  return {
    props: {
      users,
    },
  };
}

export default Users;
