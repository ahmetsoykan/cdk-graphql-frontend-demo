/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation createNote(
    $input: NoteInput!
  ) {
    createNote(note: $input) {
      detail
      id
    }
  }
`;

export const deleteNote = /* GraphQL */ `
  mutation deleteNote(
    $id: String!
  ) {
    deleteNote(id: $id) {
      detail
      id
    }
  }
`;