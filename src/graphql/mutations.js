/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createSiteData = /* GraphQL */ `
  mutation CreateSiteData(
    $input: CreateSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    createSiteData(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateSiteData = /* GraphQL */ `
  mutation UpdateSiteData(
    $input: UpdateSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    updateSiteData(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteSiteData = /* GraphQL */ `
  mutation DeleteSiteData(
    $input: DeleteSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    deleteSiteData(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
