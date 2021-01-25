import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    const CardLoop = robots.map((user,i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username={robots[i].username} />
    });
    return(
    <div>
        {CardLoop}
    </div>
    );
}

export default CardList;