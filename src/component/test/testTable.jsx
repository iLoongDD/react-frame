import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Modal, Button } from 'antd';
import { Link } from 'react-router-dom';

const { confirm } = Modal;

export default class TestTable extends Component {
  static propTypes = {
    testList: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  deleteData = (record) => {
    const _this = this;
    confirm({
      title: '确定删除这条数据?',
      content: '确定后点击是删除数据',
      okText: '是',
      okType: 'danger',
      cancelText: '否',
      onOk() {
        _this.props.onDelete(record.nameId);
      },
      onCancel() {
      },
    });
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
      render: (text, record) => {
        return (
          <Button size="small" onClick={() => this.deleteData(record)}>删除</Button>
        );
      },
    }];
    return (
      <Table columns={columns} dataSource={testList} />
    );
  }
}
