import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TestTable from './testTable';
import {
  onViewInit,
  onListSearch,
} from './redux/actions';
import {
  testListSelectors,
} from './redux/selectors';

class TestTableView extends Component {
  static propTypes = {
    onViewInit: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    testList: PropTypes.array.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.onSearch();
  }
  render() {
    const { testList } = this.props;
    return (
      <TestTable
        testList={testList}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    testList: testListSelectors(state),
  };
}

const mapDispatchToProps = {
  onViewInit,
  onSearch: onListSearch,
};

TestTableView = connect(mapStateToProps, mapDispatchToProps)(TestTableView);
export default TestTableView;
