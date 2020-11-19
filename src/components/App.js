import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {

// Initialise state property with empty array (when expecting an array of objects)
  state = { images: [] }

// Request-reply, response awaits what the get method returns
// Define arrow function, mark is as async and assign to an instance property
  onSearchSubmit = async (term) => {
      const response = await unsplash.get('/search/photos', { params: { query: term}
      });

// request to api, pull out results and set it on state object, which causes componenet to re-render
      this.setState({ images: response.data.results });
    }

  render() {
    return (
      <div className='ui container' style={{ marginTOp: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images}/>
      </div>
    )
  };
};

export default App;

// Props passes information down hierarchy (Parent to Child), can use callback function to pass information Child to Parent.
// console.log(this) to find out problem with this
