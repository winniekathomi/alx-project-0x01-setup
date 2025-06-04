// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">Username: {user.username}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <div className="text-gray-600">
        <p>
          Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
        <p>Phone: {user.phone}</p>
        <p>
          Website:{' '}
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {user.website}
          </a>
        </p>
        <p>
          Company: {user.company.name} - {user.company.catchPhrase}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
