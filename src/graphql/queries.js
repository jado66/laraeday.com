/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSiteData = /* GraphQL */ `
  query GetSiteData($key: String!) {
    getSiteData(key: $key) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const listSiteData = /* GraphQL */ `
  query ListSiteData(
    $key: String
    $filter: ModelSiteDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSiteData(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        key
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($name: String!) {
    getPicture(name: $name) {
      name
      owner
      group
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $name: String
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPictures(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        owner
        group
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
