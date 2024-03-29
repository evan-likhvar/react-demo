import React, {Component} from 'react';
import './todo-list-item.css';

export default class ListItem extends Component {
    // state = {
    //     done: false,
    //     important: false
    // };

    // onLabelClick = () => {
    //     this.setState((done) => {
    //         return {done: done}
    //     });
    // };
    //
    // onMarkImportant = () => {
    //     this.setState((important) => {
    //         return {important: important}
    //     });
    // };

    render() {
        const {label,onItemDeleted,onToggleDone,onToggleImportant,done, important} = this.props;
        //const {done, important} = this.state;

        //console.log(this.props);
        //console.log(this.state);

        let itemState = 'todo-list-item';
        if (done) {
            itemState += ' done'
        }

        if (important) {
            itemState += ' important';
        }
        return (
            <span className={itemState}>

                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button" className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"
                       onClick={onItemDeleted}
                    />
                </button>

            </span>
        );
    }
}
