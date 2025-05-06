const apiConfig = {
    uri: process.env.NODE_ENV === 'production' ? 'http://34.58.118.136' : 'http://localhost:80',
    routes: {
        submitEntry: '/api/entries',
        fetchEntries: '/api/entries',
    }
}

export { apiConfig }