
export default function getAndAddList(state = [], action) {
  switch (action.type) {
    case 'GET-PERSONAL' :
      return ['default data']
    case 'ADD-PERSONALS':
      const personnal = [...state,action.payload]
      return personnal
    default:
      return state
  }
}