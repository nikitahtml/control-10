import React from 'react';
import axios from 'axios';

class CommentSection extends React.Component {
    state = {
        comments: [] as any[],
        newComment: '',
        error: null as string | null,
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`/news/${this.props.newsId}/comments`);
            this.setState({ comments: response.data });
        } catch (error) {
            this.setState({ error: 'Ошибка при загрузке комментариев' });
        }
    }

    handleAddComment = async () => {
        try {
            await axios.post(`/news/${this.props.newsId}/comments`, {
                author: 'Anonymous',
                content: this.state.newComment,
            });
            this.setState({ newComment: '' });
            this.componentDidMount(); // Перезагрузка комментариев
        } catch (error) {
            this.setState({ error: 'Ошибка при добавлении комментария' });
        }
    };

    render() {
        const { comments, newComment, error } = this.state;

        if (error) {
            return <div>Ошибка: {error}</div>;
        }

        return (
            <div>
                <h3>Комментарии</h3>
                {comments.map((comment: any) => (
                    <div key={comment.id}>
                        <p><strong>{comment.author}</strong>: {comment.content}</p>
                    </div>
                ))}
                <textarea
                    value={newComment}
                    onChange={(e) => this.setState({ newComment: e.target.value })}
                />
                <button onClick={this.handleAddComment}>Добавить комментарий</button>
            </div>
        );
    }
}

export default CommentSection;
