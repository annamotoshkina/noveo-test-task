const directoryReducer = (state = {
	path: '/',
	files: [],
  loading: true,
}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_DIRECTORY':
      return {
      	path: action.path,
		    files: action.files,
        loading: false,
      };
    case 'SET_CURRENT_DIRECTORY_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default directoryReducer;