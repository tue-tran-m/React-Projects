
function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItem = itemList.map(item =>   <li keys={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>); 

    return( <>
                <h3 className="category">{category}</h3>
                <ul className="list">{listItem}</ul>
            </>);
}

export default List

// fruits.sort((a, b) => a.name.localeCompare(b.name));
// fruits.sort((a, b) => a.calories - b.calories);