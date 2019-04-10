/*middleware firing multiple actions*/

import { createStore, applyMiddleware } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'Case_1': {
      return state;
    }
    case 'Case_2': {
      return state;
    }
    case 'Case_3': {
      return state;
    }
    case 'Get_Data': {
      return {...state, users: action.data}
    }
    default: {
      return state;
    }
  }
}

const m_ware1 = store => next => action => {
  console.log(action.type, "task completed");
  next(action);
}

const m_ware2= store => next => action => {
  if(typeof action === "function") {
    action(store, 10, 20);
  } else {
    next(action);
  }
}

const m_ware3 = store => next => action => {
  if(Array.isArray(action)) {
    action.map(a => store.dispatch({ type: 'DoThis:', data: a }));
  } else {
    next(action);
  }
}

const middlewares = applyMiddleware(m_ware2, m_ware1,m_ware3);
const store = createStore(reducer, middlewares);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

const fetchData= () => {
  return (store, ten, twenty) => {
    setTimeout(() => {
      store.dispatch(dataFetched([{name: 'User 1'},
       {name: 'User 2'}]));
    }, 3000);
  }
}

const normalAction = (passdata) => ({
  type: 'Type1',
  passdata
});

const dataFetched = (data) => ({
  type: 'Type2',
  data
});

store.dispatch(normalAction());
store.dispatch(fetchData())
store.dispatch([
  23,
  23,
  67,
  89
]);

