// components/common/PostModal.tsx
import React, { useState } from 'react';
import { PostData, PostModalProps } from '../../interfaces';

const PostModal: React.FC<PostModalProps> = ({ post, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<PostData>(post || { title: '', content: '' });

  return (
    <div className="modal">
      <h2>Create / Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <button onClick={() => onSubmit(formData)}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PostModal;
