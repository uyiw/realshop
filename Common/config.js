
let apiDomain = 'http://127.0.0.1:8000';
export default {
    api:{
        home : apiDomain + '/api/index',
        detail : apiDomain + '/api/detail?id={id}',
        hot: apiDomain + '/api/hot?id={id}',
        search:apiDomain+'/api/search?search={searchText}'
    },
}