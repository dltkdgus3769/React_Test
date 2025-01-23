import { NavLink, Outlet } from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <CategoryItem name={"카테고리 1"} />
                <CategoryItem name={"카테고리 2"} />
                <CategoryItem name={"카테고리 3"} />
            </ul>
        </div>
    );
};

const CategoryItem = ({ name }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            <NavLink
                to={`/category/${name}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                카테고리 {name}
            </NavLink>
        </li>
    );
};

export default Categories;