import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp_web',
      storage,
      whitelist: ['auth', 'user', 'meet'],
    },
    reducers
  );

  return persistedReducer;
};
