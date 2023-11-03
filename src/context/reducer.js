export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS_PER_PAGE": {
      console.log(action.type, action.payload);
      return { ...state, postPerPage: action.payload };
    }
  }
  return { ...state };
};
