import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <div className="text-gray-600">
        <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        <p>Phone: {phone}</p>
        <p>Website: <a href={`https://${website}`} target="_blank" className="text-blue-600">{website}</a></p>
        <p>Company: {company.name} - {company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
