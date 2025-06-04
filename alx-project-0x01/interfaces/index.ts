// Post interfaces

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  id?: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  post: PostData | null;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}


// User interfaces

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

export interface UserModalProps {
  user: UserProps | null;
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
