import React from 'react';
import './app.css';

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
      Trelloyes!
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List 
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))
        }
      </div>
    </main>
  );
}

export default App;