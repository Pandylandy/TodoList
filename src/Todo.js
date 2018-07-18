import React from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Divider } from 'antd';
import { addTaskAction, closeTaskAction, activateTaskAction, showActiveAction, showClosedAction, showAllAction } from "./action";
import { Select } from 'antd';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);

}



const Search = Input.Search;


const todoStates = {
    active: 'Active',
    done: 'Done',
    all: 'All',
  }
;

const ToDo = ({ addTask, closeTask, activateTask, showActive, showAll, showClosed, data }) => {

  const onClick = (key) => {
        if (todoStates[key] === 'Active') {
          console.log('^^', showActive);
            return showActive();
        }
        else  if (todoStates[key] === 'Done') {
            return showClosed();
        }
        else    {
            return showAll();
        }
    };
  const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
    {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
    {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
    },
    { title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (x) => (
        <span>
          <Button href="" onClick={() => closeTask(x)}>Close</Button>
          <Divider type="vertical" />
          <Button href="" onClick={() => activateTask(x)}>Open</Button>
        </span>
      )
    },

  ];
  return (
    <div align="center">
      <Select defaultValue="active" style={{ width: 120 }} onChange={onClick}>
        {Object.keys(todoStates).map((key, i) =>
          <Option key={i} value={key}>{todoStates[key]}</Option>
        )}
    </Select>

    <Search
      placeholder="type to add"
      onSearch={addTask}
      enterButton={<Button> OK</Button>}
    />

    <Table columns={columns} dataSource={data}/>
    </div>
  )
};


const mapStateToProps = state => ({
  data: state.todo,
});

const mapDispatchToProps = dispatch => ({
  addTask: (text) => dispatch(addTaskAction(text)),
  closeTask: (id) => dispatch(closeTaskAction(id)),
  activateTask : (id) => dispatch(activateTaskAction(id)),
  showActive: () => dispatch(showActiveAction()),
  showClosed: () => dispatch(showClosedAction()),
  showAll: () => dispatch(showAllAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);