import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Treebeard } from 'react-treebeard';

const data = {
    name: '根节点',
    toggled: true,
    children: [
        {
            name: '父节点',
            children: [
                { name: '子节点1' },
                { name: '子节点2' }
            ]
        },
        {
            name: '加载中父节点',
            loading: true,
            children: []
        },
        {
            name: '父节点',
            children: [
                {
                    name: '嵌套父节点',
                    children: [
                        { name: '嵌套子节点1' },
                        { name: '嵌套子节点2' }
                    ]
                }
            ]
        }
    ]
};

class TreeExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }

    render() {
        const { data } = this.state;
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}

export default TreeExample;