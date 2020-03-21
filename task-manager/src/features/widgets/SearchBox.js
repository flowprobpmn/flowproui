import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search_value: ""
    }
  }
  onSearchChange = (event) => {
    this.setState({ search_value: event.target.value })
    this.props.handleSearchChange && this.props.handleSearchChange(event.target.value);
  }

  render() {
    return (
      <div className="c-search-box">
        <TextField onChange={this.onSearchChange} className="c-search-box__wrapper" id="outlined-basic" variant="outlined" />
        <SearchIcon className="c-search-box__icon" />
      </div>
    )
  }
}

export default SearchBox;
