import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

export default class TestTable extends Component {
  static propTypes = {
    testList: PropTypes.array.isRequired,
  };
  render() {
    const { testList } = this.props;
    const columns = [{
      title: '姓名id',
      dataIndex: 'nameId',
      key: 'nameId',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '水果',
      dataIndex: 'fruit',
      key: 'fruit',
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text) => {
        return (
          <div>删除</div>
        );
      },
    }];
    return (
      <Table columns={columns} dataSource={testList} />
    );
  }
}
