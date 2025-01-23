import { useParams } from 'react-router-dom';

const Category = () => {
    const { name } = useParams();

    return (
        <div>
            <h2>카테고리 {name}</h2>
        </div>
    );
};

export default Category;