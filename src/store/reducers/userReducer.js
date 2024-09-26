const initialState = {
    users: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
    ],
    posts: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // Tạo mảng mới với các user không bị xóa
            const updatedUsers = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: updatedUsers
            };

        case 'CREATE_USER':
            const id = Math.floor(Math.random() * 10000);
            const newUser = { id: id, name: `random-${id}` };
            return {
                ...state,
                users: [...state.users, newUser] 
            };

        default:
            return state;
    }
}

export default userReducer;
