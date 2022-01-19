

export const reducer = (state, action) => {
  switch (action.type) {
    case "list": {
      return action.tasks;
    }
    case "add": {
      return [action?.task, ...state];
    }
    case "delete": {
      return state?.filter((item) => item?.id !== action?.id);
    }
    case "status": {
      return state?.map((item) => {
        if (action?.id === item?.id) {
          return {
            ...item,
            status: !item?.status,
          };
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
};
