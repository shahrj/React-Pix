import React from 'react';


class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = event => {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className='ui segment'>
          <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
              <label>Image Search</label>
              <input
                type='text'
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}/>
            </div>
          </form>
        </div>
        );
    }
};

export default SearchBar;

// do not add () to a callback function event handler so that is not called when app renders

// SearchBar is a UI component and should not be responsible for API requests
