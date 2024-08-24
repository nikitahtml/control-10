import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const NewsList: React.FC = () => {
    const news = useSelector((state: RootState) => state.news.news);

    if (!Array.isArray(news)) {
        return <div>Ошибка: данные новостей некорректны</div>;
    }

    return (
        <div>
            {news.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
