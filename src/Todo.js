import React from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Divider } from 'antd';
import { addTaskAction, closeTaskAction, activateTaskAction} from "./action";
import { Select } from 'antd';


const Option = Select.Option;
const Search = Input.Search;


const todoStates = {
    active: 'Active',
    done: 'Done',
    all: 'All',
  }
;
const getTodos = (data, key) => {
    if (todoStates[key] === 'All') {
        return data;
    }
    else if (todoStates[key] === 'Active') {
        return data.filter(o => o.status === 'open');
    }
    else { return data.filter(o => o.status === 'done');
    }



};

let keyFilter = 'all';

class ToDo extends React.Component {

    render() {

        const {addTask, closeTask, activateTask, data} = this.props;

        const Todos = getTodos(data, keyFilter);

        const onClick = (key) => {
            keyFilter = key;
            this.setState({todo: getTodos(data, keyFilter)})

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
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (x) => (
                <span>
                  <Button href="" onClick={() => closeTask(x)}>Close</Button>
                  <Divider type="vertical"/>
                  <Button href="" onClick={() => activateTask(x)}>Open</Button>
                </span>
            )
            },
        ];
        return (
            <div>
                <div align="center">
                    <Select defaultValue="active" style={{width: 120}} onChange={onClick}>
                        {Object.keys(todoStates).map((key, i) =>
                            <Option key={i} value={key}>{todoStates[key]}</Option>
                        )}
                    </Select>

                    <Search
                        placeholder="type to add"
                        onSearch={addTask}
                        enterButton={<Button> OK</Button>}
                    />
                </div>
                <div>
                    <Table columns={columns} dataSource={Todos}/>
                </div>
            </div>
        )

    }
    }

const mapStateToProps = state => ({
  data: state.todo,
});

const mapDispatchToProps = dispatch => ({
  addTask: (text) => dispatch(addTaskAction(text)),
  closeTask: (id) => dispatch(closeTaskAction(id)),
  activateTask : (id) => dispatch(activateTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);