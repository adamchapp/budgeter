import React, { Component } from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import transactions from '../store/mock-transaction-data';

class TransactionContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log('created');
        this.state = {
            transactions: transactions
        };
    }

    componentDidLoad() {
        console.log('loaded');
    }

    render() {

        const { transactions } = this.state;

        return (

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Account</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {transactions.map(item =>
                        <Table.Row>
                            <Table.Cell>{item.date}</Table.Cell>
                            <Table.Cell>{item.amount}</Table.Cell>
                            <Table.Cell>{item.reference}</Table.Cell>
                            <Table.Cell>{item.account}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='user' /> Add User
                            </Button>
                            <Button size='small'>Approve</Button>
                            <Button disabled size='small'>Approve All</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        );
    }
}

export default TransactionContainer;