import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlise";
// import storage from "redux-persist/lib/storage";
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist';



export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
	}
});



// const persistConfig = {
// 	key: 'contacts',
// 	storage,
// 	whitelist: ['contacts'],
// };

// const rootReducer = combineReducers({
// 	contacts: contactsReducer,
// 	filter: filterReducer,
// });

// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
// 	reducer: persistedRootReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

// export const persistor = persistStore(store);


