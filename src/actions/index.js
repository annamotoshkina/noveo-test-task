export const setToken = token => ({
	type: 'SET_TOKEN',
	token,
});

export const setCurrentDirectory = (path, files) => ({
	type: 'SET_CURRENT_DIRECTORY',
	path,
	files,
});

export const setCurrentDirectoryLoading = () => ({
	type: 'SET_CURRENT_DIRECTORY_LOADING',
});