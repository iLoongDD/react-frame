import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TestTable from './testTable';
import './test.less';
import {
  onViewInit,
  onListSearch,
  onListDelete,
} from './redux/actions';
import {
  testListSelectors,
} from './redux/selectors';

class TestTableView extends Component {
  static propTypes = {
    onViewInit: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    testList: PropTypes.array.isRequired,
  };
  componentWillMount() {
    this.props.onViewInit();
    this.props.onSearch();
  }
  render() {
    const { testList, onDelete } = this.props;
    return (
      <div>
        <p className="test">我就是测试一下less配置</p>
        <TestTable
          testList={testList}
          onDelete={onDelete}
        />
      </div>
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
  onDelete: onListDelete,
};

TestTableView = connect(mapStateToProps, mapDispatchToProps)(TestTableView);
export default TestTableView;
