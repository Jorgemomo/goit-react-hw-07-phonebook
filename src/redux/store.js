import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: { contacs: contactsReducer },
});

export { store };
