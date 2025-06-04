// interfaces/index.ts

// Interface for individual posts (from your earlier PostProps)
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Interface for individual users (from your earlier UserProps)
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// New interface for modal post data, with optional id
export interface PostData {
  id?: number;
  title: string;
  content: string;
}

// Props for the PostModal component
export interface PostModalProps {
  post: PostData | null;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
