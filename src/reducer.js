export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token value to be removed (have it null)
    // token: 'BQCYqZGHMEbCEmtVVF1Cf2QRK69dEibAv2FL0VHDpcMLhFTFd2_k6xYBoKWIjSvZhpgtRR82xGVpqcejmjkyg91NGe7fNcg-mzT-KD3gMmktcBgQTHAB0Bwfkylgob84y-apjk_HTanqzQrTqQX-SK0Q8R9sapMZH1NzJy-xQqhtk9ULp0C1'
}

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
};


export default reducer;