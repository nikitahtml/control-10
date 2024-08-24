import React from 'react';

const NewsItem: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

export default NewsItem;
