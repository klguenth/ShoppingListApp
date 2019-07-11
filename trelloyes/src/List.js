import React from 'react';
import './list.css';

function List() {
    return (
        <main className='List'>
            <header className='List-header'>
            List
            </header>
            <div className='List-cards'>
                {STORE.lists.map(list => (
                    <List 
                    header={list.header}
                    cards={list.cardIds.map(id => store.allCards[id])}
                  />
                ))}
            </div>
        </main>
    );
}

export default List;