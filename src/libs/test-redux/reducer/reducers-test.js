
export default function getAndAddList(state = [], action) {
  switch (action.type) {
    case 'ADD-PERSONALS':
      const personnal = [...state,action.payload]
      return personnal
    default:
      return state
  }
}