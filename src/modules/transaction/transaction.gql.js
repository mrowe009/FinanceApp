import gql from 'graphql-tag'

export const TransactionFragment = gql`
  fragment TransactionFragment on Transaction {
    _id
    group
    amount
    createdAt
    description
  }
`

export const UserTransactions = gql`
  query UserTransactions {
    transactions {
      ...TransactionFragment
    }
  }
  ${TransactionFragment}
`

export const NewTransaction = gql`
  mutation NewTransaction($input: TransactionInput!) {
    saveTransaction(input: $input) {
      _id
    }
  }
`