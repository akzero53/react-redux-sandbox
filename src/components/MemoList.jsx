import React from 'react';
import { connect } from 'react-redux';

class MemoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='text' />
        <button>add memo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(MemoList);
